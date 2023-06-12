import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Login/>} path=""/>
          <Route 
          element={
          <React.Fragment>
            <Header />
            <Home />
          </React.Fragment>} 
          path="/home"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
