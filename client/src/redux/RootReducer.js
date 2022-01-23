import {combineReducers} from 'redux'
import { AuthReducer } from './Auth/reducer';
import { MapReducer } from "./Map/reducer";

export const RootReducer=combineReducers({
    Map: MapReducer,
    Auth: AuthReducer
})