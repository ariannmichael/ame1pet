import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from "../src/components/commons/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header/>
        <Router/>
        <ToastContainer autoClose={2500} position="top-right" />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
