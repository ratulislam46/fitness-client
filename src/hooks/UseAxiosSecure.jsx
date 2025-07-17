import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router';

const axiosInstance = axios.create({
    baseURL: `http://localhost:3000`
})

const UseAxiosSecure = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    axiosInstance.interceptors.request.use(config => {
        if (user?.accessToken) {
            config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error)
    })

    // admin role verify 
    // trainer role verify 
    // member role verify 
    axiosInstance.interceptors.response.use(res => {
        return res;
    }, error => {
        const status = error.status;
        if (status === 403) {
            navigate('/forbidden')
        }
        if (status === 401) {
            logOut(() => {
                navigate('/logout')
            })
                .catch(() => {
                    console.log('error interceptors');
                })
        }
        return Promise.reject(error);
    })

    return axiosInstance
};

export default UseAxiosSecure;