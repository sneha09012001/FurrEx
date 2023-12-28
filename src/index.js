import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './home';
import ProductPage from './productpage';
import ProductList from './productList';
import AboutUs from './aboutUs';
import Contact from './contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/productpage" element={<ProductPage />}></Route>
        <Route exact path="/productList" element={<ProductList />}></Route>
        <Route exact path="/aboutUs" element={<AboutUs />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
