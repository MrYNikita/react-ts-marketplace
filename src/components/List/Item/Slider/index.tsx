import { useState, useEffect, useRef } from 'react';
import { IPlace } from '../../../../classes/place';
import IconLike from '../../../Icon/Like';
import IconPoint from '../../../Icon/Point';
import IconStatistic from '../../../Icon/Statistic';
import Seen from './Seen';
import * as SC from './style';

const Slider = ({ seen, photos, }: IPlace & { photos: string[] }) => {

    const time = useRef(5);
    const index = useRef(0);

    const [photo, setPhoto] = useState(<SC.Item src={photos[index.current]} />);

    useEffect(() => {

        const i = setInterval(() => {

            changeIndexByTime();

        }, 250);

        return () => {

            clearInterval(i);

        };

    }, [index]);

    const move = (bias = 1) => {

        const indexLast = index.current;

        index.current = calcIndex(bias);


        if (indexLast > index.current) {

            setPhoto(<>
                <SC.ItemEscapeLeft src={photos[indexLast]} onAnimationEnd={_ => setPhoto(<SC.Item src={photos[index.current]} />)} />
                <SC.ItemNext src={photos[index.current]} />
            </>);

        } else if (indexLast < index.current) {

            setPhoto(<>
                <SC.ItemEscapeRight src={photos[indexLast]} onAnimationEnd={_ => setPhoto(<SC.Item src={photos[index.current]} />)} />
                <SC.ItemNext src={photos[index.current]} />
            </>);

        };
    };

    const calcIndex = (bias = 0) => {

        bias += index.current;
        bias = bias < 0 ? 3 : bias > 3 ? 0 : bias;

        return bias;

    };

    const changeIndexByTime = () => {

        if (time.current) {

            time.current--;

        } else {

            time.current = 5;

            move(calcIndex(1) - index.current);

        };

    };

    return (
        <SC.Backdrop>
            <SC.WrapperPhoto>
                {photo}
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
                    {new Array(4).fill(0).map((_, ei) => <IconPoint selected={ei === index.current && true} key={ei} onClick={_ => {

                        move(ei - index.current);
                        time.current = 5;

                    }} />)}
                </SC.WrapperIndex>
            </SC.Layout>
        </SC.Backdrop>
    );

};

export default Slider;