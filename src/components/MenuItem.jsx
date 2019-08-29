import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BREAKPOINTS_QUERY } from "../config/MenuConfig";

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 20px;
    padding: 5px 0;

    @media ${BREAKPOINTS_QUERY.MOBILE} {
        padding: 12px 0;
        border-bottom: 1px solid #f18990;
        cursor: pointer;

        &:last-of-type {
            border-bottom: none;
        }
    }
`;

const Icon = styled.div`
    padding: 10px 0;
    font-size: 20px;
    transform: rotate(${props => props.rotation || 0}deg);
`;

const Text = styled.div`
    font-size: 32px;
    font-weight: 900;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    @media ${BREAKPOINTS_QUERY.MOBILE} {
        font-size: 20px;
        font-weight: 400;
        padding: 10px;

        &:hover {
            text-decoration: none;
        }
    }
`;

class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.wrapperClickHandler = this.wrapperClickHandler.bind(this);
        this.textClickHandler = this.textClickHandler.bind(this);
    }

    wrapperClickHandler() {
        if (this.props.isMobile) {
            this.props.actionOnClick();
        }
    }

    textClickHandler() {
        if (!this.props.isMobile) {
            this.props.actionOnClick();
        }
    }

    render() {
        const { text, isMobile, icon, rotation } = this.props;

        return (
            <Wrapper onClick={this.wrapperClickHandler}>
                {isMobile && (
                    <Icon rotation={rotation}>
                        <FontAwesomeIcon icon={icon} />
                    </Icon>
                )}
                <Text onClick={this.textClickHandler}>{text}</Text>
            </Wrapper>
        );
    }
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    rotation: PropTypes.number,
    isMobile: PropTypes.bool.isRequired,
    actionOnClick: PropTypes.func
};

MenuItem.defaultProps = {
    actionOnClick: () => {}
};

export default MenuItem;
