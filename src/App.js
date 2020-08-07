import React from 'react';
import Login from './components/Login'
import Header from './components/Header'
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Header />
      <Login />
    </div>
  );
}

export default App;
