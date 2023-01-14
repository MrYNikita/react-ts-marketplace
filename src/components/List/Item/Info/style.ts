import styled from 'styled-components';

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
    "o o w w w"
    "p p p . ."
    "n n n n n"
    "l d d d d"
`;
export const Text = styled.p`
    left: 12px;
    position: relative;
    font-style: normal;
    line-height: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
export const Date = styled(Text)`
    left: -12px;
    color: #8F8F8F;
    text-align: right;
    grid-area: d;
    font-weight: 400;
    font-size: 12px;
    line-height: 13.79px;
`;
export const Title = styled(Text)`
    grid-area: n;
    font-size: 14px;
    font-weight: 500;
`;
export const Price = styled(Text)`
    grid-area: p;
    font-size: 22px;
    font-weight: 700;
`;
export const Locality = styled(Text)`
    width: 103px;
    margin-right: 26px;
    color: #8F8F8F;
    grid-area: l;
    overflow: hidden;
    line-height: 14px;
    font-size: 14px;
    font-weight: 400;
`;
export const OldPrice = styled(Text)`
    top: 2px;
    color: #5A5A5A;
    font-size: 14px;
    grid-area: o;
    font-weight: 400;
    text-decoration: line-through;
`;
export const Wrapper = styled.div`
    top: 4px;
    right: 12px;
    display: flex;
    position: relative;
    grid-area: w;
    align-items: center;
    justify-content: right;

    & > * {
        margin-right: 14px;
    }

`;