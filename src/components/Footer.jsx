import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 20px;
    padding: 8px 0;
    border-top: 1px solid #f18990;
`;

const Text = styled.div`
    font-size: 22px;
    vertical-align: middle;
    padding-top: 10px;
`;

function HeaderComponent() {
    return (
        <Wrapper>
            <Text>We're here to help</Text>
        </Wrapper>
    );
}

export default HeaderComponent;
