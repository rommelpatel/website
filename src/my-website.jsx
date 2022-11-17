import React from "react";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/navbar";

function MyWebsite() {
    return (
        <HashRouter>
            <NavBar />
        </HashRouter>
    );
}

export default MyWebsite;
