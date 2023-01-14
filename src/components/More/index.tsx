import Arrow from '../Icon/Arrow';
import * as SC from './style';

const More = ({ onClick, }: { onClick: React.MouseEventHandler }) => {

    return (
        <SC.Wrapper onClick={onClick}>
            <SC.More>Показать больше</SC.More>
            <Arrow/>
        </SC.Wrapper>
    );

};

export default More;