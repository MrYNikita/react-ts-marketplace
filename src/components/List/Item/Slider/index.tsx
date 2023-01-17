import { useState, useEffect, useRef } from 'react';
import { createContext } from 'react';
import { IPlace } from '../../../../classes/place';
import IconLike from '../../../Icon/Like';
import IconPoint from '../../../Icon/Point';
import IconStatistic from '../../../Icon/Statistic';
import Photo from './Photo';
import Seen from './Seen';
import * as SC from './style';

import p1 from "./image/1.jpg";
import p2 from "./image/2.jpg";
import p3 from "./image/3.jpg";
import p4 from "./image/4.jpg";

interface ISliderContext {

    photos: string[],
    photoIndex: number,

};

export const SliderContext = createContext<ISliderContext>({ photos: [], photoIndex: 0, });

const Slider = ({ seen, photos, }: IPlace&{ photos: string[] }) => {

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

    const calcIndex = (bias = 0) => {

        bias += index;
        bias = bias < 0 ? 3 : bias > 3 ? 0 : bias;

        return bias;

    };
    const changeIndexByTime = () => {

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
            <SliderContext.Provider
                value={{

                    photos: [p1, p2, p3, p4].sort(_ => Math.random() - 0.5),
                    photoIndex: index,

                }}
            >
                <SC.WrapperPhoto>
                    <SC.Item src={photos[index]}/>
                </SC.WrapperPhoto>
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

                            setIndex(ei)
                            time.current = 5;

                        }} />)}
                    </SC.WrapperIndex>
                </SC.Layout>
            </SliderContext.Provider>
        </SC.Backdrop>
    );

};

export default Slider;