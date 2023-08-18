import { UIPanel } from "../libs/ui";
// import "./MenuTop.css";
import { MenuTopFile } from "./menuTop/MenuTop.File";
import { MenuTopAdd } from "./menuTop/MenuTop.Add";
import { MenuTopEdit } from "./menuTop/MenuTop.Edit";


function MenuTop( editor ) {

    const container = new UIPanel();
    container.setId( 'menubar' );

    container.add( new MenuTopFile( editor ) );
    container.add( new MenuTopAdd( editor ) );
    container.add( new MenuTopEdit( editor ) );

    return container;

}

export { MenuTop };