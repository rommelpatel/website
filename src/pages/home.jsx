import React from "react";
import {
    BackgroundStyle,
    ComingSoon,
    LineSeparation,
    Logo,
} from "../components/styled/home-style";

function Home() {
    return (
        <BackgroundStyle>
            <Logo>Rommel Patel</Logo>
            <ComingSoon>
                <h1>Coming Soon</h1>
                <LineSeparation />
                <p>to an internet near you</p>
            </ComingSoon>
        </BackgroundStyle>
    );
}

export default Home;
