import styled from 'styled-components';

export const Wrapper = styled.img`
    width: 100%;
    height: 260px;

    z-index: 0;
    position: relative;

    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
`;

export const Item = styled.img`

width: 100%;
height: 100%;
position: relative;
z-index: 0;

`;
export const ItemNext = styled(Item)`

top: -100%;

`;
export const ItemEscape = styled(Item)`

z-index: 1;

`;
export const ItemEscapeLeft = styled(ItemEscape)`

animation: 0.75s escape-left linear forwards;

`;
export const ItemEscapeRight = styled(ItemEscape)`

animation: 0.75s escape-right linear forwards;

`;