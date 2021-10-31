import axios, { AxiosResponse } from 'axios';

require("dotenv").config()

const OmdbApiInstance = axios.create({
    baseURL: process.env.URL_OMDBAPI,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

export {
    OmdbApiInstance,
    AxiosResponse
};