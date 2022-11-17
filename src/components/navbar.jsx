import React from "react";
import { TopNav, NavButton } from "./styled/navbar-style";

function NavBar() {
    return (
        <TopNav>
            <NavButton to="/contact-me">Contact Me</NavButton>
            <NavButton to="/blog">Blog</NavButton>
            <NavButton to="/gallery">Gallery</NavButton>
            <NavButton to="/home">Home</NavButton>
        </TopNav>
    );
}

export default NavBar;
