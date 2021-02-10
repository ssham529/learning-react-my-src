import React from 'react';
import styled, { css } from 'styled-components';

const MyBox = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
`;

const MyButton = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    ${props => props.inverted && 
     css`
        background: none;
        border: 2px solid white;
        color: white;
        &.hover {
            background: white;
            color: black;
        }
    `};
    
    & + button {
        margin-left: 1rem;
    }
`;

const MyInput = styled.input`
    background: yellow;
    color: black;
`;

const StyledComponent = () => (
    <MyBox color="black">
        <MyButton>안녕하세요</MyButton>
        <MyButton inverted={true}>테두리만</MyButton>
        <MyInput />
    </MyBox>
)


export default StyledComponent;