function Strings( config ) {

    const language = config.getKey( 'language' );

    const values = {

        en: {

            'menubar/file': 'File',
            'menubar/file/new': 'New',
			'menubar/file/import': 'Import',
            'menubar/file/export/geometry': 'Export Geometry',
			'menubar/file/export/object': 'Export Object',
			'menubar/file/export/scene': 'Export Scene',
            'menubar/file/export/glb': 'Export GLB',
			'menubar/file/export/gltf': 'Export GLTF',
            'menubar/file/export/obj': 'Export OBJ',
            'menubar/file/publish': 'Publish',

            'menubar/edit': 'Edit',
			'menubar/edit/undo': 'Undo (Ctrl+Z)',
			'menubar/edit/redo': 'Redo (Ctrl+Shift+Z)',
            'menubar/edit/clear_history': 'Clear History',
			'menubar/edit/center': 'Center',
			'menubar/edit/clone': 'Clone',
			'menubar/edit/delete': 'Delete (Del)',
			'menubar/edit/fixcolormaps': 'Fix Color Maps',

			'menubar/add': 'Add',
			'menubar/add/group': 'Group',
			'menubar/add/plane': 'Plane',
			'menubar/add/box': 'Box',
			'menubar/add/sphere': 'Sphere',
            'menubar/add/pointlight': 'PointLight',
			'menubar/add/spotlight': 'SpotLight',
			'menubar/add/directionallight': 'DirectionalLight',
			'menubar/add/hemispherelight': 'HemisphereLight',
			'menubar/add/ambientlight': 'AmbientLight',
			'menubar/add/perspectivecamera': 'PerspectiveCamera',
			'menubar/add/orthographiccamera': 'OrthographicCamera',

            'menubar/status/autosave': 'autosave',

            'menubar/view': 'View',
			'menubar/view/fullscreen': 'Fullscreen',

            'sidebar/scene': 'Scene',
			'sidebar/scene/background': 'Background',
			'sidebar/scene/environment': 'Environment',

            'sidebar/properties/object': 'Object',
			'sidebar/properties/geometry': 'Geometry',
			'sidebar/properties/material': 'Material',
			'sidebar/properties/script': 'Script',

            'sidebar/object/type': 'Type',
			'sidebar/object/new': 'New',
			'sidebar/object/uuid': 'UUID',
			'sidebar/object/name': 'Name',
			'sidebar/object/position': 'Position',
			'sidebar/object/rotation': 'Rotation',
			'sidebar/object/scale': 'Scale',
            'sidebar/object/left': 'Left',
			'sidebar/object/right': 'Right',
			'sidebar/object/top': 'Top',
			'sidebar/object/bottom': 'Bottom',

            'sidebar/geometry/type': 'Type',
			'sidebar/geometry/new': 'New',
			'sidebar/geometry/uuid': 'UUID',
			'sidebar/geometry/name': 'Name',
			'sidebar/geometry/bounds': 'Bounds',
			'sidebar/geometry/show_vertex_normals': 'Show Vertex Normals',
			'sidebar/geometry/compute_vertex_normals': 'Compute Vertex Normals',
			'sidebar/geometry/center': 'Center',

            'sidebar/material/new': 'New',
			'sidebar/material/copy': 'Copy',
			'sidebar/material/paste': 'Paste',
			'sidebar/material/slot': 'Slot',
			'sidebar/material/type': 'Type',
			'sidebar/material/uuid': 'UUID',

            'sidebar/settings': 'Settings',
			'sidebar/settings/language': 'Language',

			'sidebar/settings/shortcuts': 'Shortcuts',
			'sidebar/settings/shortcuts/translate': 'Translate',
			'sidebar/settings/shortcuts/rotate': 'Rotate',
			'sidebar/settings/shortcuts/scale': 'Scale',
			'sidebar/settings/shortcuts/undo': 'Undo',
			'sidebar/settings/shortcuts/focus': 'Focus',

            'sidebar/history': 'History',
			'sidebar/history/persistent': 'persistent',

            'toolbar/translate': 'Translate',
			'toolbar/rotate': 'Rotate',
			'toolbar/scale': 'Scale',
			'toolbar/local': 'Local',

            'viewport/info/objects': 'Objects',
			'viewport/info/vertices': 'Vertices',
			'viewport/info/triangles': 'Triangles',
			'viewport/info/frametime': 'Frametime'

        },

        kr: {

        }
    }

    return {

        getKey: ( key ) => {

            return values[ language ][ key ] || '???';

        }

    }

}

export { Strings }