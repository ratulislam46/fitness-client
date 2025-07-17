import React, { use } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './UseAxiosSecure'

const UseAdminRole = () => {

    const { user, loading } = use(AuthContext)
    const axiosSecure = UseAxiosSecure();

    const { data: role = 'member', isLoading, refetch } = useQuery({
        queryKey: ['user-role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`users/${user.email}/role`)
            return res.data.role;
        }
    })
    console.log(role);

    return { role, isLoading, refetch }
};

export default UseAdminRole;