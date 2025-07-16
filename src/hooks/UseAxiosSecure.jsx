import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const axiosInstance = axios.create({
    baseURL: `http://localhost:3000`
})

const UseAxiosSecure = () => {

    const { user } = useContext(AuthContext)

    axiosInstance.interceptors.request.use(config => {

        if (user?.accessToken) {
            config.headers.Authorization = `Bearer ${user.accessToken}`;
        }

        return config;
    }, (error) => {
        return Promise.reject(error)
    })
    return axiosInstance
};

export default UseAxiosSecure;