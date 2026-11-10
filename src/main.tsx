import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './boutique.css';
import App from './App';

document.documentElement.classList.add('has-js');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
