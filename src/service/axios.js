import axios from 'axios';

const API_BASE = 'http://localhost:3100'

const get = endpoint =>{
    return axios.get(`${API_BASE}${endpoint}`)
}


export {
    get,
}