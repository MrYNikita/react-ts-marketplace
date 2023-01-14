import styled from 'styled-components';

export const Icon = styled.svg<{ gridArea?: string }>`

    ${props => props.gridArea ? `grid-area: ${props.gridArea}` : ''}
    position: relative;

    &:hover * {

        fill: #00A0AB;

    }

`;