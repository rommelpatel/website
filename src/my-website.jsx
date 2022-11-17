import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Blog from "./pages/blog";
import ContactMe from "./pages/contact-me";
import Gallery from "./pages/gallery";
import Home from "./pages/home";

function MyWebsite() {
    return (
        <HashRouter>
            <NavBar />
            <Switch>
                <Redirect path="/" to="/home" exact component={Home} />
                <Route path="/contact-me" exact component={ContactMe} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </HashRouter>
    );
}

export default MyWebsite;
