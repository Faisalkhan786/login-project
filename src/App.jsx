import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          {/* Redirect unknown routes to login */}
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
