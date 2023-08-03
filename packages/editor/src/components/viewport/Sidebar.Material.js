import { UIPanel } from "../../libs/ui";

function SidebarMaterial ( editor ) {

    const signals = editor.signals;

    const container = new UIPanel();
    container.setBorderTop( '0' );
    container.setDisplay( 'none' );
    container.setPaddingTop( '20px' );

    return container;

}

export { SidebarMaterial }