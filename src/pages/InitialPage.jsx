import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import actions from "../modules/action";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import MenuSwitcher from "../components/MenuSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fd6365;
    color: white;
`;

const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #fd6365;
    overflow-y: auto;
    z-index: 2;
    transition: 0.5s;
    transform: translateY(
        ${({ state }) =>
            state === "entering" || state === "entered" ? 0 : -100}vh
    );
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
            <Transition in={isMenuOpen} timeout={500}>
                {state => (
                    <MenuWrapper state={state}>
                        <MenuSwitcher />
                    </MenuWrapper>
                )}
            </Transition>
        </Wrapper>
    );
}

export default InitialPage;
