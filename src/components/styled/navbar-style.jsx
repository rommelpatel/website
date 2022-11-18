import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopNav = styled.div`
    background-color: #9c9c9c;
    overflow: hidden;
`;

export const NavButton = styled(Link)`
    float: right;
    display: block;
    color: #030303;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
`;
