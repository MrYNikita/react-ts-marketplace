import styled from 'styled-components';
import { Icon } from '../style';

export const IconPoint = styled(Icon)<{ selected?: boolean }>`
    width:8px;
    height:8px;

    ${({ selected }) => selected && '& * { fill: #00A0AB; }' }

`;