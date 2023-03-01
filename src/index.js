import React from 'react';
import {createRoot } from 'react-dom/client'
import App from './App';

import { Provider } from 'react-redux'
import { store } from './app/store';
// Add import statement below



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  // Implement Provider component with store below
  <Provider 
  store={store}>
  <App />,
  
  </Provider>
);


