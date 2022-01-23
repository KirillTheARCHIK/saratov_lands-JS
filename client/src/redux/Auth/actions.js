import { host } from "../../Axios"
import { FILL_USER_INFO } from "../types"


export async function login(dispatch, email, password){
    let errorMessage=null
    const response = await host.post('/login', {email, password}).catch((error)=>{errorMessage=error.response.data.message})
    if(errorMessage)
    {
        return errorMessage
    }
    dispatch({
        type: FILL_USER_INFO,
        payload: {...response.data, isAuth: true}
    })
}
export async function register(dispatch, email, password){
    let errorMessage=null
    const response = await host.post('/register', {email, password}).catch((error)=>{errorMessage=error.response.data.message})
    if(errorMessage)
    {
        return errorMessage
    }
    dispatch({
        type: FILL_USER_INFO,
        payload: {...response.data, isAuth: true}
    })
}
export async function logout(dispatch){
    await host.post('/logout')
    dispatch({
        type: FILL_USER_INFO,
        payload: {isAuth: false}
    })
}
export async function checkAuth(dispatch){
    let errorMessage=null
    const response = await host.get('/refresh', {withCredentials: true}).catch((error)=>{errorMessage=error.response.data.message})
    if(errorMessage)
    {
        return errorMessage
    }
    dispatch({
        type: FILL_USER_INFO,
        payload: {...response.data, isAuth: true}
    })
}

