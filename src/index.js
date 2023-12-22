import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

document.body.innerHTML = '<div id="app"></div>';
createRoot(document.getElementById('app')).render(<App />);