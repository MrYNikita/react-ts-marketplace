import { IPlace } from '../../../classes/place';
import * as SC from './style';
import Slider from './Slider';
import Info from './Info';
import Loader from '../../../UI/Wrappers/Loader';
import { useEffect, useState } from 'react';

const Item = (data: IPlace) => {

    const [result, setResult] = useState(<Loader/>);

    async function create() {

        setResult(<>
            <Slider {...data}></Slider>
            <Info {...data}></Info>
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