import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import UseAdminRole from '../hooks/UseUserRole';

const AdminRoute = ({ children }) => {

    const location = useLocation();
    const { user, loading } = use(AuthContext);
    const { role, isLoading } = UseAdminRole();

    if (isLoading || loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }
    if (!user || role !== 'admin') {
        return <Navigate state={location.pathname} to='/forbidden'></Navigate>
    }

    return children;
};

export default AdminRoute;