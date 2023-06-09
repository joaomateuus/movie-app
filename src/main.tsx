import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import dotenv from 'dotenv';
import { BrowserRouter } from 'react-router-dom';

// dotenv.config()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
