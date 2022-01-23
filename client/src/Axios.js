import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { checkAuth } from './redux/Auth/actions';
import store from './redux/Store';
import { SET_ACCESS_TOKEN } from './redux/types';

const API_URL='http://localhost:2000/api/'

export const host = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

host.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${store.getState().Auth.accessToken}`
    return config;
})

host.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest)
    console.log(originalRequest._isRetry)
    if (error.response.status == 401 && error.config && !originalRequest._isRetry) {
        try {
            const response = await host.get('/refresh', {withCredentials: true, _isRetry: true})
            await store.dispatch({type: SET_ACCESS_TOKEN, payload: response.data.accessToken})
            return host.request({...error.config, _isRetry: true});
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})



// export async function registration(email, password){
//     return host.post('/registration', {email, password})
// }

// export async function logout(email, password){
//     return host.post('/logout')
// }
// export async function checkAuth(){
//     return host.get('/refresh', {withCredentials: true})
// }


