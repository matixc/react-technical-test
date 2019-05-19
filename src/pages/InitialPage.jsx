import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import actions from "../modules/action";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MenuSwitcher from "../components/MenuSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fd6365;
    color: white;
`;

const MenuWrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 100vh;
    z-index: 2;
`;

const Icon = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 18px;
    z-index: 1;
`;

function InitialPage() {
    const dispatch = useDispatch();
    const toogleMenu = useCallback(
        () => dispatch({ type: actions.Types.TOOGLE_MENU }),
        [dispatch]
    );
    const isMenuOpen = useSelector(state => state.isMenuOpen);

    return (
        <Wrapper>
            <Icon>
                {!isMenuOpen && (
                    <FontAwesomeIcon
                        icon="bars"
                        size="2x"
                        onClick={toogleMenu}
                    />
                )}
            </Icon>
            {isMenuOpen && (
                <MenuWrapper>
                    <MenuSwitcher />
                </MenuWrapper>
            )}
        </Wrapper>
    );
}

export default InitialPage;
