import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home';
import Upload from './routes/upload';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Watch from './routes/watch';
import Tag from './routes/tag';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="upload" element={<Upload />} />
      <Route path="watch" element={<Watch />} />
      <Route path="tag" element={<Tag />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
