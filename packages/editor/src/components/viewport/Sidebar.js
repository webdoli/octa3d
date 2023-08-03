import { UITabbedPanel, UISpan } from "../../libs/ui";
import { SidebarScene } from "./Sidebar.Scene";
import { SidebarProperties } from "./Sidebar.Properties";
import { SidebarSettings } from "./Sidebar.Settings";

function Sidebar ( editor ) {

    const strings = editor.strings;

    const container = new UITabbedPanel();
    container.setId( 'sidebar' );

    const scene = new UISpan().add(
        new SidebarScene( editor ),
        new SidebarProperties( editor )
    );

    const settings = new SidebarSettings( editor );

    container.addTab( 'scene', strings.getKey( 'sidebar/scene' ), scene );
    container.select( 'scene' );

    return container;

}

export { Sidebar }