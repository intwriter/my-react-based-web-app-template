import React from 'react';
import StyledButtonComponent from 'app_components_path/styled/styledbuttoncomponent';

export default function ExampleComponent() {
    function buttonClick() {
        alert("Button was clicked")
    }

    return (
        <StyledButtonComponent onClick={buttonClick}>Example button</StyledButtonComponent>
    );
}