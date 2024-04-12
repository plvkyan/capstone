import './index.css';
import App from './App.tsx';
import { AuthContextProvider } from "./context/AuthContext.jsx";
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>

  </React.StrictMode>,
)
