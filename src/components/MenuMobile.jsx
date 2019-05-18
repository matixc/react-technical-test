import React from "react";
import styled from "styled-components";
import Header from "./Header";
import UserInfo from "./UserInfo";
import MenuItem from "./MenuItem";
import Footer from "./Footer";

const MobileMenu = styled.div`
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

const MobileMenuContent = [
    { text: "Profile", icon: "user-circle" },
    { text: "My Bookings", icon: "plane", rotation: 315 },
    { text: "My Payments", icon: "credit-card" },
    { text: "Support", icon: "life-ring" },
    { text: "Contact Us", icon: "phone", rotation: 90 },
    { text: "Log Out", icon: "sign-out-alt" },
    { text: "About", icon: "question-circle" },
    { text: "FAQ", icon: "info-circle" }
];

function MenuMobile() {
    return (
        <MobileMenu>
            <Header />
            <UserInfo />
            <MenuItemsWrapper>
                {MobileMenuContent.map((item, index) => (
                    <MenuItem
                        text={item.text}
                        icon={item.icon}
                        rotation={item.rotation || 0}
                        key={`mobile-menu-item-${index}`}
                    />
                ))}
            </MenuItemsWrapper>
            <Footer />
        </MobileMenu>
    );
}

export default MenuMobile;
