import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
import ClientForm from './components/ClientForm';
import FreelanceForm from './components/FreelanceForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='survey' element={<Survey />} >
          <Route path='client' element={<ClientForm />} />
          <Route path='freelance' element={<FreelanceForm />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
