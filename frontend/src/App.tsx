import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from "../src/components/commons/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
