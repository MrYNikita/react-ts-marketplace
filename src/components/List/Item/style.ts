import styled from 'styled-components';

export const Item = styled.div<{ seen: boolean }>`
    width: 224px;
    height: 368px;
    margin: 1em;
    display: flex;
    position: relative;
    min-width: 224px;
    border-radius: 12px;
    flex-direction: column;
    background-color: ${({ seen }) => seen ? '#FFF6A5' : '#fff'}
`;