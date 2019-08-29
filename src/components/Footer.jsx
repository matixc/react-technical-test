import React from "react";
import styled from "styled-components";
import { BREAKPOINTS_QUERY } from "../config/MenuConfig";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    padding: 15px 0 20px;
    border-top: 1px solid #f18990;

    @media ${BREAKPOINTS_QUERY.MOBILE} {
        padding: 8px 0;
    }
`;

const Text = styled.div`
    font-size: 22px;
    vertical-align: middle;
    padding: 2px 0;

    @media ${BREAKPOINTS_QUERY.MOBILE} {
        padding-top: 10px;
    }
`;

const Link = styled.a`
    font-size: 22px;
    vertical-align: middle;
    padding: 2px 0;
    text-decoration: none;
    color: white;
`;

function HeaderComponent({ isMobile }) {
    return (
        <Wrapper>
            <Text>We're here to help</Text>
            {!isMobile && (
                <Link href="tel:+442080503459">+44 (0) 20 8050 3459</Link>
            )}
            {!isMobile && (
                <Link href="mailto:support@awaymo.com?Subject=Hello%20world">
                    support@awaymo.com
                </Link>
            )}
        </Wrapper>
    );
}

export default HeaderComponent;
