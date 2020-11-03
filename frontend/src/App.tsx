import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from "../src/components/commons/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
      <ToastContainer autoClose={2500} position="top-right" />
    </BrowserRouter>
  );
}

export default App;
