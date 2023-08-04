import { Command } from "../Command";
import { SetUuidCommand } from "./SetUuidCommand";
import { SetValueCommand } from "./SetValueCommand";
import { AddObjectCommand } from "./AddObjectCommand";


class SetSceneCommand extends Command {

    constructor( editor, scene ) {
        
        super( editor );
        this.type = 'SetSceneCommand';
        this.name = 'Set Scene';

        this.cmdArray = [];

        if( scene !== undefined ) {


        }

    }

    execute() {

        this.editor.signals.sceneGraphChanged.active = false;

        for ( let i = 0; i < this.cmdArray.length; i ++ ) {

			this.cmdArray[ i ].execute();

		}

        this.editor.signals.sceneGraphChanged.active = true;
		this.editor.signals.sceneGraphChanged.dispatch();

    }

    undo() {

        this.editor.signals.sceneGraphChanged.active = false;

        for( let i = this.cmdArray.length -1; i >= 0; i -- ) {

            this.cmdArray[i].undo();

        }

        this.editor.signals.sceneGraphChanged.active = true;
		this.editor.signals.sceneGraphChanged.dispatch();

    }

    toJSON() {

        const output = super.toJSON( this );

        const cmds = [];
        for( let i=0; i < this.cmdArray.length; i++ ) {

            cmds.push( this.cmdArray[i].toJSON() );

        }

        output.cmds = cmds;

        return output;

    }

    fromJSON( json ) {

        super.fromJSON( json );

        const cmds = json.cmds;

        for( let i = 0; i < cmds.length; i++ ) {

            const cmd = new window[ cmds[i].type ](); //creates a new object of type 'json.type'
            cmd.fromJSON( cmds[i] );
            this.cmdArray.push( cmd );

        }

    }

}

export { SetSceneCommand }