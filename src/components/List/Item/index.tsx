import { IPlace } from '../../../classes/place';
import * as SC from './style';
import Slider from './Slider';
import Info from './Info';
import Loader from '../../../UI/Wrappers/Loader';
import { useEffect, useState } from 'react';

import p1 from "./image/1.jpg";
import p2 from "./image/2.jpg";
import p3 from "./image/3.jpg";
import p4 from "./image/4.jpg";

const Item = (data: IPlace) => {

    const photos = [p1, p2, p3, p4].sort(_ => Math.random() - 0.5);

    const [result, setResult] = useState(<Loader/>);

    async function create() {

        setResult(<>
            <Slider {...data} photos={photos}/>
            <Info {...data}/>
        </>);

    };

    useEffect(() => {

        create();

    },[])

    return (

        <SC.Item seen={data.seen}>
            {result}
        </SC.Item>

    );

};

export default Item;