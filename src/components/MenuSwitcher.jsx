import React from "react";
import styled from "styled-components";
import Media from "react-media";
import MenuMobile from "./MenuMobile.jsx";
import MenuDesktop from "./MenuDesktop.jsx";
import { MENU_SWITCH_BRAKEPOINT_PX } from "../config/MenuConfig";

const Wrapper = styled.div`
    min-height: 100hv;
`;

function MenuSwitcher() {
    return (
        <Wrapper>
            <Media query={`(max-width: ${MENU_SWITCH_BRAKEPOINT_PX}px)`}>
                {maches => (maches ? <MenuMobile /> : <MenuDesktop />)}
            </Media>
        </Wrapper>
    );
}

export default MenuSwitcher;
