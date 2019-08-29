import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import actions from "../modules/action";
import styled from "styled-components";
import logo from "../assts/images/awaymoFullWhite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BREAKPOINTS_QUERY } from "../config/MenuConfig";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 20px;
    padding: 8px 0;
    border-bottom: 2px solid white;

    @media ${BREAKPOINTS_QUERY.MOBILE} {
        padding: 8px 0;
        border-bottom: 1px solid #f18990;
    }
`;

const Logo = styled.img`
    height: 30px;
    padding: 15px;

    @media ${BREAKPOINTS_QUERY.MOBILE} {
        margin-left: 30px;
    }
`;

const Icon = styled.div`
    position: absolute;
    padding: 17px;
    right: -15px;
    font-size: 20px;
    cursor: pointer;
`;

function Header() {
    const dispatch = useDispatch();
    const toggleMenu = useCallback(
        () => dispatch({ type: actions.Types.TOGGLE_MENU }),
        [dispatch]
    );
    return (
        <Wrapper>
            <Logo src={logo} />
            <Icon onClick={toggleMenu}>
                <FontAwesomeIcon icon="times" />
            </Icon>
        </Wrapper>
    );
}

export default Header;
