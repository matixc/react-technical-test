import React from "react";
import styled from "styled-components";
import avatar from "../assts/images/avatar.png";

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => (props.isMobile ? "column" : "row")};
    align-items: ${props => (props.isMobile ? "center" : "flex-start")};
    padding: ${props => (props.isMobile ? "30px 0 5px" : "20px 0 13px")};
    border-bottom: ${props => (props.isMobile ? "none" : "1px solid #f18990")};
    width: ${props => (props.isMobile ? "auto" : "410px")};
    margin-bottom: ${props => (props.isMobile ? "0" : "20px")};
`;

const Avatar = styled.img`
    width: 29px;
    height: 29px;
    background-color: white;
    border: solid white 11px;
    border-radius: 50%;
`;

const AvatarBorder = styled.div`
    width: ${props => (props.isMobile ? "45px" : "56px")};
    height: ${props => (props.isMobile ? "45px" : "56px")};
    margin: ${props => (props.isMobile ? "0" : "0 20px")};
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid white 3px;
    border-radius: 50%;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.isMobile ? "center" : "flex-start")};
`;

const Name = styled.div`
    font-size: ${props => (props.isMobile ? "24px" : "24px")};
    font-weight: ${props => (props.isMobile ? "400" : "900")};
    padding: ${props => (props.isMobile ? "5px 0 2px" : "2px 0")};
`;

const Text = styled.div`
    font-size: 17px;
    padding: 2px 0;
`;

const Amount = styled.div`
    font-weight: ${props => (props.isMobile ? "400" : "900")};
    font-size: 20px;
    padding: 2px 0;
`;

function UserInfo({ isMobile }) {
    return (
        <Wrapper isMobile={isMobile}>
            <AvatarBorder isMobile={isMobile}>
                <Avatar src={avatar} />
            </AvatarBorder>
            <TextWrapper isMobile={isMobile}>
                <Name isMobile={isMobile}>
                    {isMobile ? "Dzieżok" : "Mateusz Dzieżok"}
                </Name>
                {isMobile && <Text>Available Balance</Text>}
                <Amount isMobile={isMobile}>
                    {isMobile ? "£1,500.00 " : "£1,500.00 Available"}
                </Amount>
            </TextWrapper>
        </Wrapper>
    );
}

export default UserInfo;
