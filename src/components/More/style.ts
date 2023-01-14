import styled from "styled-components";

export const More = styled.p`
    color: #00A0AB;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    position: relative;
    white-space: nowrap;
`;
export const Wrapper = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: right;
    padding-bottom: 12px;

    & > * {
        right: 2%;
        margin-left: 1%;
    }
`;