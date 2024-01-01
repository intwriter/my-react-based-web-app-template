import React from 'react';

import StyledExampleButtonComponent from 'app_components_path/styled/styledexamplebuttoncomponent/styledexamplebuttoncomponent';
import useExampleHook from './hooks/examplehook';

export default function ExampleComponent() {
    const { onClick } = useExampleHook();

    return (
        <StyledExampleButtonComponent onClick={onClick}>Example button</StyledExampleButtonComponent>
    );
}