import React from "react";
import styled from "styled-components";
import { BRAKEPOINTS_QUERY } from "../config/MenuConfig";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    padding: 15px 0 20px;
    border-top: 1px solid #f18990;

    @media ${BRAKEPOINTS_QUERY.MOBILE} {
        padding: 8px 0;
    }
`;

const Text = styled.div`
    font-size: 22px;
    vertical-align: middle;
    padding: 2px 0;

    @media ${BRAKEPOINTS_QUERY.MOBILE} {
        padding-top: 10px;
    }
`;

function HeaderComponent({ isMobile }) {
    return (
        <Wrapper>
            <Text>We're here to help</Text>
            {!isMobile && <Text>+44 (0) 20 8050 3459</Text>}
            {!isMobile && <Text>support@awaymo.com</Text>}
        </Wrapper>
    );
}

export default HeaderComponent;
