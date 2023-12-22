import React from 'react';
import { ThemeProvider } from 'styled-components';
import { apptheme } from './assets/styles/themes/apptheme';
import ExampleComponent from './components/examplecomponent';

export default function App() {
    return (
        <ThemeProvider theme={apptheme}>
            <ExampleComponent></ExampleComponent>
        </ThemeProvider>
    );
}