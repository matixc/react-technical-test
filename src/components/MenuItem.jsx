import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 20px;
    padding: 12px 0;
    border-bottom: 1px solid #f18990;

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
    font-size: 20px;
    vertical-align: middle;
    padding: 10px;
`;

function MenuItem({ icon, text, rotation, isMobile }) {
    return (
        <Wrapper>
            {isMobile && (
                <Icon rotation={rotation}>
                    <FontAwesomeIcon icon={icon} />
                </Icon>
            )}
            <Text>{text}</Text>
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
