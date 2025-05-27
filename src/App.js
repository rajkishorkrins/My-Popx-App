import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import CreateAccount from './pages/CreateAccount';
import LoginPage from './pages/LoginPage';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
