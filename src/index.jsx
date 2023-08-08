import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Help from './pages/Help';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/mentions" element={<Mentions/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
