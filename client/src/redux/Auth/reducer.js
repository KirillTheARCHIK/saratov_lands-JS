import { FILL_USER_INFO, SET_ACCESS_TOKEN } from "../types";


const initialState = {
    accessToken: '',
    user: {},
    isAuth: false,
}
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_USER_INFO:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                user: action.payload.user,
                isAuth: action.payload.isAuth
            }
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload,
            }
        default:
            return state;
    }
}