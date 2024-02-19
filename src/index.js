import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './components/Table';
import LoginPage from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RandomPage from './components/RandomPage';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="table" element={<Table />} />
          <Route path="random" element={<RandomPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
