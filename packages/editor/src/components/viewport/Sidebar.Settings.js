import { SidebarSettingsShortcuts } from "./Sidebar.Settings.Shortcuts"

function SidebarSettings( editor ) {

    const config = editor.config;
    const strings = editor.strings;

    const shortCuts = new SidebarSettingsShortcuts( editor );

}

export { SidebarSettings }