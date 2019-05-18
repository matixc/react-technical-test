import React from "react";
import MenuSwitcher from "./components/MenuSwitcher";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTimes,
    faUserCircle,
    faPlane,
    faCreditCard,
    faLifeRing,
    faPhone,
    faSignOutAlt,
    faQuestionCircle,
    faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faTimes,
    faUserCircle,
    faPlane,
    faCreditCard,
    faLifeRing,
    faPhone,
    faSignOutAlt,
    faQuestionCircle,
    faInfoCircle
);

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
  }
`;

const Wrapper = styled.div`
    min-height: 100vh;
`;

function App() {
    return (
        <Wrapper className="App">
            <GlobalStyles />
            <MenuSwitcher />
        </Wrapper>
    );
}

export default App;
