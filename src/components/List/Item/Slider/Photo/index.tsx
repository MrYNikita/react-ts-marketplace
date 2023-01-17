import * as SC from './style';
import { SliderContext } from '../index'
import { useContext } from 'react';

const Photo = () => {

    const {

        photos,
        photoIndex,

    } = useContext(SliderContext);

    return (
        <SC.Wrapper src={photos[photoIndex]}>

        </SC.Wrapper>
    );

};

export default Photo;