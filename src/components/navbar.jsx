import React from "react";
import {TopNav, NavButton} from "./styled/navbar-style";

function NavBar() {
    return <TopNav>
        <NavButton>Contact Me</NavButton>
        <NavButton>Blog</NavButton>
        <NavButton>Gallery</NavButton>
        <NavButton>Home</NavButton>
    </TopNav>;
}

export default NavBar;
