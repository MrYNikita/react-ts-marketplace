import styled from 'styled-components';

export const Backdrop = styled.div`

    width: 100%;
    height: 260px;
    position: relative;
`;
export const Layout = styled.div`
    z-index: 1;
    top: -260px;

    width: inherit;
    height: inherit;
    position: relative;

    display: grid;
    grid-template-areas:
    "v"
    "s"
    "l"
    "i";
    grid-template-rows: 5fr 1fr 1fr 1fr;
`;
export const Wrapper = styled.div<{ gridArea: string }>`
    grid-area: ${props => props.gridArea};
`;
export const WrapperIndex = styled(Wrapper)`
    display: flex;
    align-items: center;
    padding-inline: 4em;
    justify-content: space-around;
`;
export const WrapperPhoto = styled.div`
    width: 100%;
    height: 260px;

    z-index: 0;
    overflow: hidden;
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