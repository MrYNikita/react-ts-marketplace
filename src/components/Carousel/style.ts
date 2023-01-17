import styled from "styled-components";

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


export const Wrapper = styled.div`

width: 100%;
height: 250px;
overflow: hidden;

`;
export const Carousel = styled.div`

width: 100%;
height: 100px;

`;