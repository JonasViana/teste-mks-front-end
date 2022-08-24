import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AddItemProvider } from './context/AddItemContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AddItemProvider>
      <App />
    </AddItemProvider>
  </React.StrictMode>
);

reportWebVitals();
