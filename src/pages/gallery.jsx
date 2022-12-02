import React from "react";
import {
    GalleryStyle,
    Row,
    Column,
    ImageStyle,
} from "../components/styled/gallery-style";
import bambi from "../../images/deer-edit-cont.jpg";
import marina from "../../images/marina-edit-100.jpg";

function Gallery() {
    return (
        <div>
            <GalleryStyle>Gallery</GalleryStyle>
            <Row>
                <Column>
                    <ImageStyle src={bambi} />
                </Column>
                <Column>
                    <ImageStyle src={marina} />
                </Column>
            </Row>
        </div>
    );
}

export default Gallery;
