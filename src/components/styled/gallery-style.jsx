import React from "react";
import styled from "styled-components";

export const GalleryStyle = styled.div`
    color: #ffffff;
    padding: 10px 16px;
    font-size: 25px;
    font-family: "Courier New", Courier, monospace;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
`;

export const Column = styled.div`
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;

    @media screen and (max-width: 800px) {
        flex: 50%;
        max-width: 50%;
    }

    @media screen and (max-width: 600px) {
        flex: 100%;
        max-width: 100%;
    }
`;

export const ImageStyle = styled.img`
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
`;
