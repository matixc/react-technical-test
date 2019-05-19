import React from "react";
import styled from "styled-components";
import Header from "./Header";
import UserInfo from "./UserInfo";
import MenuItem from "./MenuItem";
import Footer from "./Footer";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #fd6365;
    color: white;
`;

const MenuItemsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
`;

const GroupWrapper = styled.div`
    min-width: 340px;
`;

const BlockWrapper = styled.div`
    flex: 1;
    padding: 8px 0;
`;

const DesktopMenuContent = {
    group1: [
        [
            {
                text: "Home",
                actionOnClick: () => {
                    window.location.href = "#/home";
                }
            },
            { text: "Flights" }
        ],
        [
            { text: "About Us" },
            { text: "FAQ" },
            { text: "Support" },
            { text: "Contact Us" }
        ]
    ],
    group2: [
        { text: "Profile" },
        { text: "My Bookings" },
        { text: "My Payments" },
        { text: "Log Out" },
        { text: "Resume Application" }
    ]
};

function MenuMobile() {
    return (
        <Wrapper>
            <Header />
            <MenuItemsWrapper>
                <GroupWrapper>
                    {DesktopMenuContent.group1.map((block, indexBlock) => (
                        <BlockWrapper key={`block-wraper-${indexBlock}`}>
                            {block.map((item, indexGroup) => (
                                <MenuItem
                                    text={item.text}
                                    actionOnClick={item.actionOnClick}
                                    isMobile={false}
                                    key={`desktop-menu-item-${indexBlock}-${indexGroup}`}
                                />
                            ))}
                        </BlockWrapper>
                    ))}
                </GroupWrapper>
                <GroupWrapper>
                    <UserInfo isMobile={false} />
                    {DesktopMenuContent.group2.map((item, indexGroup) => (
                        <MenuItem
                            text={item.text}
                            isMobile={false}
                            key={`desktop-menu-item-${indexGroup}`}
                        />
                    ))}
                </GroupWrapper>
            </MenuItemsWrapper>
            <Footer />
        </Wrapper>
    );
}

export default MenuMobile;
