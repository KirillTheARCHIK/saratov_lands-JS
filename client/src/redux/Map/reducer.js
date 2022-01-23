import { FILL_FIELDS_LIST, SET_SELECTED_FIELD } from "../types";

const initialState = {
    fields: [],
    selectedField: {},
}
export const MapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_FIELD:
            return {
                ...state,
                selectedField: action.payload
            }
        case FILL_FIELDS_LIST:
            return{
                ...state,
                fields: action.payload
            }
        default:
            return state;
    }
}