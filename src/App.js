import React from "react";
import InitialPage from "./pages/InitialPage.jsx";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

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
    faInfoCircle,
    faBars
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
    faInfoCircle,
    faBars
);

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Lato", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Wrapper = styled.div``;

const reduxStore = configureStore();

function App() {
    return (
        <ReduxProvider store={reduxStore}>
            <Wrapper>
                <GlobalStyles />
                <InitialPage />
            </Wrapper>
        </ReduxProvider>
    );
}

export default App;
