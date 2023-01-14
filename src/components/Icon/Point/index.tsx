import { clickOptions } from '@testing-library/user-event/dist/click';
import * as SC from './style';

const IconPoint = ({ selected, onClick }: { selected?: boolean, onClick: React.MouseEventHandler<SVGSVGElement> }) => {

    return (
        <SC.IconPoint selected={selected} onClick={onClick}>
            <circle cx="4" cy="4" r="3.5" fill="#C4C4C4" stroke="#5A5A5A"/>
        </SC.IconPoint>
    );

};

export default IconPoint;