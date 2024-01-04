import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './assets/styles/themes/default/theme';
import ExampleComponent from 'app_components_path/logical/examplecomponent/examplecomponent';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ExampleComponent></ExampleComponent>
        </ThemeProvider>
    );
}

export default App;