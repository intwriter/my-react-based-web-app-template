import React from 'react';

import StyledExampleButtonComponent from 'app_components_path/styled/styledexamplebuttoncomponent';

export default function ExampleComponent() {
    function buttonClick() {
        alert("Button was clicked")
    }

    return (
        <StyledExampleButtonComponent onClick={buttonClick}>Example button</StyledExampleButtonComponent>
    );
}