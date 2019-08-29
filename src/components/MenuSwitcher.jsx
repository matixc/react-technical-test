import React from "react";
import Media from "react-media";
import MenuMobile from "./MenuMobile.jsx";
import MenuDesktop from "./MenuDesktop.jsx";
import { BREAKPOINTS_QUERY } from "../config/MenuConfig";

function MenuSwitcher() {
    return (
        <Media query={BREAKPOINTS_QUERY.MOBILE}>
            {maches => (maches ? <MenuMobile /> : <MenuDesktop />)}
        </Media>
    );
}

export default MenuSwitcher;
