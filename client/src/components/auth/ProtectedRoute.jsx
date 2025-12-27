import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    // Show nothing or a spinner while loading auth state
    if (loading) return null; // Or a <LoadingSpinner />

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
