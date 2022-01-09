import { SELECT_ALL_FIELDS, SELECT_ONE_FIELD } from "../types";

const initialState = {
    fields: [],
    selectedField: {},
}
export const MapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ONE_FIELD:
            return {
                ...state,
                selectedField: action.payload
            }
        case SELECT_ALL_FIELDS:
            return{
                ...state,
                fields: action.payload
            }
        default:
            return state;
    }
}