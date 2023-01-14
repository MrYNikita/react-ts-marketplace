import * as SC from './style';
import { PropsWithChildren } from 'react';
import { IPlace } from '../../classes/place';
import Item from './Item';

interface IList {

    points: IPlace[],

};

const List = ({ points, }: IList) => {

    return (
        <SC.List>
            {points.map((p, pi) => <Item {...p} key={pi}/>)}
        </SC.List>
    );

};

export default List;