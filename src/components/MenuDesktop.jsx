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
    flex: 1;
`;

const DesktopMenuContent = [
    { text: "Home" },
    { text: "Flights" },
    { text: "About Us" },
    { text: "FAQ" },
    { text: "Support" },
    { text: "Contact Us" },
    { text: "Profile" },
    { text: "My Bookings" },
    { text: "My Payments" },
    { text: "Log Out" },
    { text: "Resume Application" }
];

function MenuMobile() {
    return (
        <Wrapper>
            <Header />
            <UserInfo />
            <MenuItemsWrapper>
                {DesktopMenuContent.map((item, index) => (
                    <MenuItem
                        text={item.text}
                        icon={item.icon}
                        rotation={item.rotation || 0}
                        isMobile={false}
                        key={`mobile-menu-item-${index}`}
                    />
                ))}
            </MenuItemsWrapper>
            <Footer />
        </Wrapper>
    );
}

export default MenuMobile;
