import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";
import "@fontsource/tangerine";
import "@fontsource-variable/montserrat";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
