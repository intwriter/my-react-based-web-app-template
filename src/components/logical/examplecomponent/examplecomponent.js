import React from 'react';

import StyledExampleButtonComponent from 'app_components_path/styled/styledexamplebuttoncomponent/styledexamplebuttoncomponent';
import useExampleHook from 'app_hooks_path/examplehook';

export default function ExampleComponent() {
    const { onClick } = useExampleHook();

    return (
        <StyledExampleButtonComponent onClick={onClick}>Example button</StyledExampleButtonComponent>
    );
}