import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersPage from './pages/usersPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegistrationPage from './pages/registrationPage';
import CurrentUser from './pages/currentUser';
import RequireAuth from './features/middleware/middleware';
import UsersHeader from './components/common/usersHeader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegistrationPage />} /> 
            
            <Route path="/users/:id" element={<RequireAuth children={<CurrentUser/>}></RequireAuth>} />
            <Route path='/' element={<RequireAuth children={<UsersHeader><UsersPage /></UsersHeader>}></RequireAuth>} /> 
        
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
