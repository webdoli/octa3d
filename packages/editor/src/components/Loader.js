import * as THREE from 'three';
import { TGALoader } from 'three/addons/loaders/TGALoader.js';
import { AddObjectCommand } from './commands/AddObjectCommand';
import { SetSceneCommand } from './commands/SetSceneCommand';

import { LoaderUtils } from './LoaderUtils';

function Loader( editor ) {

    const scope = this;
    this.texturePath = '';

    this.loadItemList = ( items ) => {

        LoaderUtils.getFilesFromItemList( items, ( files, filesMap ) => {

            scope.loadFile( files, filesMap )

        });

    };

    this.loadFiles = ( files, filesMap ) => {

        if( files.length > 0 ) {

            filesMap = filesMap || LoaderUtils.createFilesMap( files );

            const manager = new THREE.LoadingManager();
            manager.setURLModifier( ( url ) => {

                url = url.replace( /^(\.?\/)/, '' ); // remove './'

                const file = filesMap[ url ];

                if ( file ) {

					console.log( 'Loading', url );

					return URL.createObjectURL( file );

				}

				return url;

            });

            manager.addHandler( /\.tga$/i, new TGALoader() );

			for ( let i = 0; i < files.length; i ++ ) {

				scope.loadFile( files[ i ], manager );

			}

        }

    };


    this.loadFile = ( file, manager ) => {

        const filename = file.name;
		const extension = filename.split( '.' ).pop().toLowerCase();

		const reader = new FileReader();
		reader.addEventListener( 'progress', function ( event ) {
			
			const size = '(' + Math.floor( event.total / 1000 ) + ' KB)';
			const progress = Math.floor( ( event.loaded / event.total ) * 100 ) + '%';

			console.log( 'Loading', filename, size, progress );

		} );

        switch ( extension ) {

            case 'fbx':
               
            {
				
				reader.addEventListener( 'load', async function ( event ) {

					const contents = event.target.result;

					const { FBXLoader } = await import( 'three/addons/loaders/FBXLoader.js' );

					const loader = new FBXLoader( manager );
					const object = loader.parse( contents );

					editor.execute( new AddObjectCommand( editor, object ) );

				}, false );
				reader.readAsArrayBuffer( file );

				break;

			}

            case 'gltf':

            {

				reader.addEventListener( 'load', async function ( event ) {

					const contents = event.target.result;

					const { DRACOLoader } = await import( 'three/addons/loaders/DRACOLoader.js' );
					const { GLTFLoader } = await import( 'three/addons/loaders/GLTFLoader.js' );

					const dracoLoader = new DRACOLoader();
					dracoLoader.setDecoderPath( '../examples/jsm/libs/draco/gltf/' );

					const loader = new GLTFLoader( manager );
					loader.setDRACOLoader( dracoLoader );

					loader.parse( contents, '', function ( result ) {

						const scene = result.scene;
						scene.name = filename;

						scene.animations.push( ...result.animations );
						editor.execute( new AddObjectCommand( editor, scene ) );

						dracoLoader.dispose();

					} );

				}, false );
				reader.readAsArrayBuffer( file );

				break;

			}

            case 'js':
            case 'json':

            {

				reader.addEventListener( 'load', function ( event ) {

					const contents = event.target.result;

					// 2.0

					if ( contents.indexOf( 'postMessage' ) !== - 1 ) {

						const blob = new Blob( [ contents ], { type: 'text/javascript' } );
						const url = URL.createObjectURL( blob );

						const worker = new Worker( url );

						worker.onmessage = function ( event ) {

							event.data.metadata = { version: 2 };
							handleJSON( event.data );

						};

						worker.postMessage( Date.now() );

						return;

					}

					// >= 3.0

					let data;

					try {

						data = JSON.parse( contents );

					} catch ( error ) {

						alert( error );
						return;

					}

					handleJSON( data );

				}, false );
				reader.readAsText( file );

				break;

			}

            case 'obj':

			{

				reader.addEventListener( 'load', async function ( event ) {

					const contents = event.target.result;

					const { OBJLoader } = await import( 'three/addons/loaders/OBJLoader.js' );

					const object = new OBJLoader().parse( contents );
					object.name = filename;

					editor.execute( new AddObjectCommand( editor, object ) );

				}, false );
				reader.readAsText( file );

				break;

			}

            case 'zip':

			{

				reader.addEventListener( 'load', function ( event ) {

					handleZIP( event.target.result );

				}, false );
				reader.readAsArrayBuffer( file );

				break;

			}

            default:

				console.error( 'Unsupported file format (' + extension + ').' );

				break;

        }

    };


    function handleJSON( data ) {

		if ( data.metadata === undefined ) { // 2.0

			data.metadata = { type: 'Geometry' };

		}

		if ( data.metadata.type === undefined ) { // 3.0

			data.metadata.type = 'Geometry';

		}

		if ( data.metadata.formatVersion !== undefined ) {

			data.metadata.version = data.metadata.formatVersion;

		}

		switch ( data.metadata.type.toLowerCase() ) {

			case 'buffergeometry':

			{

				const loader = new THREE.BufferGeometryLoader();
				const result = loader.parse( data );

				const mesh = new THREE.Mesh( result );

				editor.execute( new AddObjectCommand( editor, mesh ) );

				break;

			}

			case 'geometry':

				console.error( 'Loader: "Geometry" is no longer supported.' );

				break;

			case 'object':

			{

				const loader = new THREE.ObjectLoader();
				loader.setResourcePath( scope.texturePath );

				loader.parse( data, function ( result ) {

					if ( result.isScene ) {

						editor.execute( new SetSceneCommand( editor, result ) );

					} else {

						editor.execute( new AddObjectCommand( editor, result ) );

					}

				} );

				break;

			}

			case 'app':

				editor.fromJSON( data );

				break;

		}

	}

    async function handleZIP( contents ) {

		const zip = unzipSync( new Uint8Array( contents ) );

		// Poly

		if ( zip[ 'model.obj' ] && zip[ 'materials.mtl' ] ) {

			const { MTLLoader } = await import( 'three/addons/loaders/MTLLoader.js' );
			const { OBJLoader } = await import( 'three/addons/loaders/OBJLoader.js' );

			const materials = new MTLLoader().parse( strFromU8( zip[ 'materials.mtl' ] ) );
			const object = new OBJLoader().setMaterials( materials ).parse( strFromU8( zip[ 'model.obj' ] ) );
			editor.execute( new AddObjectCommand( editor, object ) );

		}

		//

		for ( const path in zip ) {

			const file = zip[ path ];

			const manager = new THREE.LoadingManager();
			manager.setURLModifier( function ( url ) {

				const file = zip[ url ];

				if ( file ) {

					console.log( 'Loading', url );

					const blob = new Blob( [ file.buffer ], { type: 'application/octet-stream' } );
					return URL.createObjectURL( blob );

				}

				return url;

			} );

			const extension = path.split( '.' ).pop().toLowerCase();

			switch ( extension ) {

				case 'fbx':

				{

					const { FBXLoader } = await import( 'three/addons/loaders/FBXLoader.js' );

					const loader = new FBXLoader( manager );
					const object = loader.parse( file.buffer );

					editor.execute( new AddObjectCommand( editor, object ) );

					break;

				}

				case 'glb':

				{

					const { DRACOLoader } = await import( 'three/addons/loaders/DRACOLoader.js' );
					const { GLTFLoader } = await import( 'three/addons/loaders/GLTFLoader.js' );

					const dracoLoader = new DRACOLoader();
					dracoLoader.setDecoderPath( '../examples/jsm/libs/draco/gltf/' );

					const loader = new GLTFLoader();
					loader.setDRACOLoader( dracoLoader );

					loader.parse( file.buffer, '', function ( result ) {

						const scene = result.scene;

						scene.animations.push( ...result.animations );
						editor.execute( new AddObjectCommand( editor, scene ) );

						dracoLoader.dispose();

					} );

					break;

				}

				case 'gltf':

				{

					const { DRACOLoader } = await import( 'three/addons/loaders/DRACOLoader.js' );
					const { GLTFLoader } = await import( 'three/addons/loaders/GLTFLoader.js' );

					const dracoLoader = new DRACOLoader();
					dracoLoader.setDecoderPath( '../examples/jsm/libs/draco/gltf/' );

					const loader = new GLTFLoader( manager );
					loader.setDRACOLoader( dracoLoader );
					loader.parse( strFromU8( file ), '', function ( result ) {

						const scene = result.scene;

						scene.animations.push( ...result.animations );
						editor.execute( new AddObjectCommand( editor, scene ) );

						dracoLoader.dispose();

					} );

					break;

				}

			}

		}

	}


};

export { Loader }