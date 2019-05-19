import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import avatar from "../assts/images/avatar.png";
import { prepareAvailableAmount } from "../helpers/amountHelper";
import { BRAKEPOINTS_QUERY } from "../config/MenuConfig";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px 0 13px;
    border-bottom: 1px solid #f18990;
    width: 410px;
    margin-bottom: 20px;

    @media ${BRAKEPOINTS_QUERY.MOBILE} {
        flex-direction: column;
        align-items: center;
        padding: 30px 0 5px;
        border-bottom: none;
        width: auto;
        margin-bottom: 0;
    }
`;

const Avatar = styled.img`
    width: 29px;
    height: 29px;
    background-color: white;
    border: solid white 11px;
    border-radius: 50%;
`;

const AvatarBorder = styled.div`
    width: 56px;
    height: 56px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid white 3px;
    border-radius: 50%;

    @media ${BRAKEPOINTS_QUERY.MOBILE} {
        width: 45px;
        height: 45px;
        margin: 0;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${BRAKEPOINTS_QUERY.MOBILE} {
        align-items: center;
    }
`;

const Name = styled.div`
    font-size: 24px;
    font-weight: 900;
    padding: 2px 0;

    @media ${BRAKEPOINTS_QUERY.MOBILE} {
        font-size: 24px;
        font-weight: 400;
        padding: 5px 0 2px;
    }
`;

const Text = styled.div`
    font-size: 17px;
    padding: 2px 0;
`;

const Amount = styled.div`
    font-weight: 900;
    font-size: 20px;
    padding: 2px 0;

    @media ${BRAKEPOINTS_QUERY.MOBILE} {
        font-weight: 400;
    }
`;

function UserInfo({ isMobile }) {
    const userData = useSelector(state => state.user);
    const amount = prepareAvailableAmount(
        userData.amount,
        userData.currency,
        userData.language
    );
    return (
        <Wrapper>
            <AvatarBorder>
                <Avatar src={avatar} />
            </AvatarBorder>
            <TextWrapper>
                <Name>
                    {isMobile
                        ? userData.lastName
                        : `${userData.firstName} ${userData.lastName}`}
                </Name>
                {isMobile && <Text>Available Balance</Text>}
                <Amount>{isMobile ? amount : `${amount} Available`}</Amount>
            </TextWrapper>
        </Wrapper>
    );
}

export default UserInfo;
