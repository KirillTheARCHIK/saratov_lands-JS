import {combineReducers} from 'redux'
import { MapReducer } from "./Map/reducer";

export const RootReducer=combineReducers({
    Map: MapReducer
})