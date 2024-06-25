import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersPage from './pages/usersPage';
import {Outlet, BrowserRouter, Routes, Route} from 'react-router-dom'
import RegistrationPage from './pages/registrationPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegistrationPage />} /> 
          <Route path='/' element={<UsersPage />} /> 
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
