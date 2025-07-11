import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: `http://localhost:3000`
})

const UseAxiosSecure = () => {

    return axiosInstance
};

export default UseAxiosSecure;