import { Command } from "../Command";

class SetUuidCommand extends Command {

    constructor( editor, object, newUuid ) {

        super( editor );

        this.type = 'SetUuidCommand';
        this.name = 'Update UUID';

        this.object = object;
        
        this.oldUuid = ( object !== undefined ) ? object.uuid : undefined;
        this.newUuid = newUuid;

    }

    execute() {

        this.object.uuid = this.newUuid;
        this.editor.signals.objectChanged.dispatch( this.object );
        this.editor.signals.sceneGraphChanged.dispatch();

    }

    undo() {

    }

    toJSON() {

    }

    fromJSON() {

    }

}

export { SetUuidCommand }