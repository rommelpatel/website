import React from "react";
import styled from "styled-components";

export const BackgroundStyle = styled.div`
    background: #030303;
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    position: absolute;
    color: white;
    font-family: "Courier New", Courier, monospace;
    font-size: 25px;
    //padding-top: 40px;
    //padding-bottom: 40px;
    //top: 0;
    //bottom: 0;
`;

export const Logo = styled.div`
    //position: absolute;
    padding-top: 10px;
    //padding-left: 10px;
    top: 0;
    left: 16px;
`;

export const ComingSoon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const LineSeparation = styled.hr`
    margin: auto;
    width: 40%;
`;
