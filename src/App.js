import React from "react";
import MobileMenu from "./components/MenuMobile";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

function App() {
    return (
        <div className="App">
            <MobileMenu />
        </div>
    );
}

export default App;
