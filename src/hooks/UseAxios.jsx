import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: `https://fitnest-server-silk.vercel.app`
})

const UseAxios = () => {
    
    return axiosInstance
};

export default UseAxios;