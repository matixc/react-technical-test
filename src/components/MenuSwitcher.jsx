import React from "react";
import Media from "react-media";
import MenuMobile from "./MenuMobile.jsx";
import MenuDesktop from "./MenuDesktop.jsx";
import { MENU_SWITCH_BRAKEPOINT_PX } from "../config/MenuConfig";

function MenuSwitcher() {
    return (
        <Media query={`(max-width: ${MENU_SWITCH_BRAKEPOINT_PX}px)`}>
            {maches => (maches ? <MenuMobile /> : <MenuDesktop />)}
        </Media>
    );
}

export default MenuSwitcher;
