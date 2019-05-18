import React from "react";
import styled from "styled-components";
import logo from "../assts/images/awaymoFullWhite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 12px;
    padding: 15px 0;
    border-bottom: 1px solid #f18990;
`;

const Logo = styled.img`
    height: 30px;
    padding: 15px;
`;

const Icon = styled.div`
    padding: 12px;
    position: absolute;
    right: 0;
    font-size: 20px;
`;

function HeaderComponent() {
    return (
        <Header>
            <Logo src={logo} />
            <Icon>
                <FontAwesomeIcon icon="times" />
            </Icon>
        </Header>
    );
}

export default HeaderComponent;
