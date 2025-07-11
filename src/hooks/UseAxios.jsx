import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: `http://localhost:3000`
})

const UseAxios = () => {
    
    return axiosInstance
};

export default UseAxios;