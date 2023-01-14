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