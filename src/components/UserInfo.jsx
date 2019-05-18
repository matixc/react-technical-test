import React from "react";
import styled from "styled-components";
import avatar from "../assts/images/avatar.png";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    background-color: white;
    border: solid white 6px;
    border-radius: 50%;
`;

const Name = styled.div`
    font-size: 24px;
    padding: 5px 0 2px;
`;

const Text = styled.div`
    font-size: 17px;
    padding: 2px 0;
`;

const Amount = styled.div`
    font-size: 20px;
    padding: 2px 0;
`;

function UserInfo() {
    return (
        <Wrapper>
            <Avatar src={avatar} />
            <Name>Mateusz</Name>
            <Text>Available Balance</Text>
            <Amount>£1,500.00</Amount>
        </Wrapper>
    );
}

export default UserInfo;
