import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 20px;
    padding: ${props => (props.isMobile ? "12px 0" : "5px 0")};
    border-bottom: ${props => (props.isMobile ? "1px solid #f18990" : "none")};

    &:last-of-type {
        border-bottom: none;
    }
`;

const Icon = styled.div`
    padding: 10px 0;
    font-size: 20px;
    transform: rotate(${props => props.rotation || 0}deg);
`;

const Text = styled.div`
    font-size: ${props => (props.isMobile ? "20px" : "32px")};
    font-weight: ${props => (props.isMobile ? "400" : "900")};
    vertical-align: middle;
    padding: ${props => (props.isMobile ? "10px" : "0")};
`;

function MenuItem({ text, isMobile, icon, rotation }) {
    return (
        <Wrapper isMobile={isMobile}>
            {isMobile && (
                <Icon rotation={rotation}>
                    <FontAwesomeIcon icon={icon} />
                </Icon>
            )}
            <Text isMobile={isMobile}>{text}</Text>
        </Wrapper>
    );
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    rotation: PropTypes.number,
    isMobile: PropTypes.bool.isRequired
};

export default MenuItem;
