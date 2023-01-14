import { IPlace } from '../../../../classes/place';
import IconMachine from '../../../Icon/Machine';
import IconShield from '../../../Icon/Shield';
import * as SC from './style';

const Info = ({ price, oldPrice, title, locality, date, }: IPlace) => {

    function formatDate() {

        const d = new Date(date);

        return `${new String(d.getDate()).padStart(2, '0')}.${new String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}, ${new String(d.getMinutes()).padStart(2, '0')}:${new String(d.getHours()).padStart(2, '0')}`;

    };
    function formatPrice(price: number|undefined) {

        return price ? new String(price).split('').reverse().join('').replace(/\d{3}/g, '$& ').trim().split('').reverse().join('') : 0;

    };

    return (
        <SC.Info>
            <SC.Date>{formatDate()}</SC.Date>
            <SC.Title>{title}</SC.Title>
            <SC.Price>{formatPrice(price)} ₽</SC.Price>
            <SC.Locality>{locality.slice(0, 15)}</SC.Locality>
            <SC.OldPrice>{formatPrice(oldPrice)} ₽</SC.OldPrice>
            <SC.Wrapper>
                <IconMachine/>
                <IconShield/>
            </SC.Wrapper>
        </SC.Info>
    );

};

export default Info;