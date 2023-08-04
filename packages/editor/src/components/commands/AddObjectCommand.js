import { Command } from "../Command";
import { ObjectLoader } from 'three';

class AddObjectCommand extends Command {

    constructor( editor, obj ) {

        super( editor );

        this.type = 'AddObjectCommand';

        this.object = obj;
        if( obj !== undefined ) {

            this.name = `Add Object: ${ obj.name }`;

        }

    }

    execute() {

        this.editor.addObject( this.object );
        this.editor.select( this.object );

    }

    undo() {

        this.editor.removeObject( this.object );
        this.editor.deselect();

    }

    toJSON() {

        const output = super.toJSON( this );
        output.object = this.object.toJSON();

        return output;

    }

    fromJSON( json ) {

        super.fromJSON( json );

        this.object = this.editor.objectByUuid( json.object.object.uuid );

        if( this.object === undefined ) {

            const loader = new ObjectLoader();
            this.object = loader.parse( json.object );

        }

    }

}

export { AddObjectCommand }