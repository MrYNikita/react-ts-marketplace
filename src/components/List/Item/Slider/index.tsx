import { useState, useEffect, useRef } from 'react';
import { IPlace } from '../../../../classes/place';
import IconLike from '../../../Icon/Like';
import IconPoint from '../../../Icon/Point';
import IconStatistic from '../../../Icon/Statistic';
import Photo from './Photo';
import Seen from './Seen';
import * as SC from './style';

const Slider = ({ seen, }: IPlace) => {

    const time = useRef(5);

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const i = setInterval(() => {

            changeIndexByTime();

        }, 250);

        return () => {

            clearInterval(i);

        };

    }, [index]);

    function changeIndexByTime() {

        if (time.current) {

            time.current--;

        } else {

            time.current = 5;

            if (index === 3) setIndex(0);
            else setIndex(index + 1);

        };

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
                        time.current = 5;

                    }} />)}
                </SC.WrapperIndex>
            </SC.Layout>
        </SC.Backdrop>
    );

};

export default Slider;