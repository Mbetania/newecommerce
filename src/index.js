import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
>>>>>>> calculator

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
    <ToastContainer/>
  </React.StrictMode>
);

reportWebVitals();
