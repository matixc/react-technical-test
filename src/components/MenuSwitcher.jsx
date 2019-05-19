import React from "react";
import Media from "react-media";
import MenuMobile from "./MenuMobile.jsx";
import MenuDesktop from "./MenuDesktop.jsx";
import { BRAKEPOINTS_QUERY } from "../config/MenuConfig";

function MenuSwitcher() {
    return (
        <Media query={BRAKEPOINTS_QUERY.MOBILE}>
            {maches => (maches ? <MenuMobile /> : <MenuDesktop />)}
        </Media>
    );
}

export default MenuSwitcher;
