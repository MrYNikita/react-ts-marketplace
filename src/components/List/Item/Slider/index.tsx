import { useState, useEffect } from 'react';
import { IPlace } from '../../../../classes/place';
import IconLike from '../../../Icon/Like';
import IconPoint from '../../../Icon/Point';
import IconStatistic from '../../../Icon/Statistic';
import Photo from './Photo';
import Seen from './Seen';
import * as SC from './style';

const Slider = ({ seen, }: IPlace) => {

    const [time, setTime] = useState<number>(5);
    const [index, setIndex] = useState<number>(0);

    // setInterval(() => {

    //     if (time) {

    //         setTime(time - 1);


    //     } else {

    //         changeIndexByTime();
    //         setTime(5);

    //     };

    // }, 1000);

    function changeIndexByTime() {

        if (index === 3) setIndex(0);
        else setIndex(index + 1);

    };

    return (
        <SC.Backdrop>
            <Photo index={index} />
            <SC.Layout>
                {seen && <Seen />}
                <SC.Wrapper gridArea='s'>
                    <IconStatistic />
                </SC.Wrapper>
                <SC.Wrapper gridArea='l'>
                    <IconLike />
                </SC.Wrapper>
                <SC.WrapperIndex gridArea='i'>
                    {new Array(4).fill(0).map((_, ei) => <IconPoint selected={ei === index && true} key={ei} onClick={_ => {

                        setIndex(ei);
                        setTime(5);

                    }} />)}
                </SC.WrapperIndex>
            </SC.Layout>
        </SC.Backdrop>
    );

};

export default Slider;