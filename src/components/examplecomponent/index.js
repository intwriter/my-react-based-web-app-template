import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #cccccc;
    padding: 5px;
    font-weight: bold;
`;

export default function ExampleComponent() {
    function buttonClick() {
        alert("Button was clicked")
    }

    return (
        <Button onClick={buttonClick}>Example button</Button>
    );
}