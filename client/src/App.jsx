import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Trainers from './pages/Trainers';
import Classes from './pages/Classes';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Catch all - Redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
