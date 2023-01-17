import * as SC from './style';

import p1 from './image/1.jpg';
import p2 from './image/2.jpg';
import p3 from './image/3.jpg';
import p4 from './image/4.jpg';

import { useRef, useState } from 'react';

const Carousel = ({}) => {

    const a = [p1, p2, p3, p4];

    const index = useRef(3);

    const [photo, setPhoto] = useState(p3);

    const [item, setItem] = useState(<SC.Item src={a[index.current]} />);

    const sequence = useRef<number[]>([]);

    const calcIndex = (bias = 0) => {

        bias = index.current + bias;
        bias = bias < 0 ? 3 : bias > 3 ? 0 : bias;

        return bias;

    };

    return (

        <>
            <SC.Wrapper>
                {item}
            </SC.Wrapper>
            <button onClick={_ => {

                index.current = calcIndex(-1);

                setItem(<>
                    <SC.ItemEscapeLeft src={a[calcIndex(1)]} onAnimationEnd={(e) => setItem(<SC.Item src={a[index.current]}/>)}/>
                    <SC.ItemNext src={a[index.current]}/>
                </>);

            }}>L</button>
            <button onClick={_ => {

                index.current = calcIndex(1);

                setItem(<>
                    <SC.ItemEscapeRight src={a[calcIndex(-1)]} onAnimationEnd={(e) => setItem(<SC.Item src={a[index.current]}/>)}/>
                    <SC.ItemNext src={a[index.current]}/>
                </>);

            }}>R</button>
        </>



        // <SC.Carousel>
        //     <SC.Containter>
        //         {item}
        //     </SC.Containter>
        //     <button onClick={_ => {

        //         sequence.current.push(-1);
        //         console.log(sequence.current);

        //         setItem(<>
        //             <SC.Item src={photo}></SC.Item>
        //             <SC.Item src={a[calcIndex(sequence.current.shift())]}></SC.Item>
        //         </>);

        //     }}>L</button>
        //     <button onClick={_ => {

        //         sequence.current.push(1);
        //         console.log(sequence.current);

        //     }}>R</button>
        // </SC.Carousel>
    );

};

export default Carousel;