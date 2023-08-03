import { Command } from "../../Command";
import { Vector3 } from "three";

class SetPositionCommand extends Command {

    constructor( editor, object, newPosition, optionalOldPosition ) {

        super( editor );

        this.type = 'SetPositionCommand';
        this.name = 'Set Position';
        this.updatable = true;

        this.object = object;

        if( object !== undefined && newPosition !== undefined ) {

            this.oldPosition = object.position.clone();
            this.newPosition = newPosition.clone();

        }

        if( optionalOldPosition !== undefined ) {

            this.oldPosition = optionalOldPosition.clone();

        }

    }

    execute() { //핵심 기능

        this.object.position.copy( this.newPosition );
        this.object.updateMatrixWorld( true );
        this.editor.signals.objectChanged.dispatch( this.object );

    }

    undo() {

        this.object.position.copy( this.oldPosition );
        this.object.updateMatrixWorld( true );
        this.editor.signals.objectChanged.dispatch( this.object );

    }

    update( command ) {

        this.newPosition.copy( command.newPosition );

    }

    fromJSON( json ) {

        super.fromJSON( json );

        this.object = this.editor.objectByUuid( json.objectUuid );
        this.oldPosition = new Vector3().fromArray( json.oldPosition );
        this.newPosition = new Vector3().fromArray( json.newPosition );

    }

    toJSON() {

        const output = super.toJSON();

        output.objectUuid = this.object.uuid;
        output.oldPosition = this.oldPosition.toArray();
        output.newPosition = this.newPosition.toArray();

        return output;

    }

}

export { SetPositionCommand }