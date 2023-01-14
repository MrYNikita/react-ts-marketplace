import * as SC from './style';
import { useState } from 'react';
import p1 from "./image/1.jpg";
import p2 from "./image/2.jpg";
import p3 from "./image/3.jpg";
import p4 from "./image/4.jpg";

const Photo = ({ index, }: { index: number, }) => {

    const photos = [p1, p2, p3, p4];

    return (
        <SC.Photo src={photos[index]}>

        </SC.Photo>
    );

};

export default Photo;