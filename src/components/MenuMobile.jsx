import React from "react";
import styled from "styled-components";
import Header from "./Header";
import UserInfo from "./UserInfo";

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #fd6365;
    color: white;
`;

// TODO temp - to be removed
const Placeholder = styled.div`
    text-align: center;
    height: 25vh;
`;

function MenuMobile() {
    return (
        <MobileMenu>
            <Header />
            <UserInfo />
            <Placeholder>menu list placeholder</Placeholder>
            <Placeholder>footer placeholder</Placeholder>
        </MobileMenu>
    );
}

export default MenuMobile;
