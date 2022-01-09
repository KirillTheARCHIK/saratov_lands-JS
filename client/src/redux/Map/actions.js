import { SELECT_ALL_FIELDS } from "../types"
import fieldsJSON from '../../data/fields.json'


export const selectAllFields=async(dispatch)=>{
    try {
        const response=fieldsJSON
        dispatch({
            type: SELECT_ALL_FIELDS,
            payload: response.data
        })
    } catch (e) {
        console.log(e)
    }
}