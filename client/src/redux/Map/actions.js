import { FILL_FIELDS_LIST } from "../types"
import fieldsJSON from '../../data/fields.json'


export const selectAllFields=async(dispatch)=>{
    try {
        const response=fieldsJSON
        dispatch({
            type: FILL_FIELDS_LIST,
            payload: response.data
        })
    } catch (e) {
        console.log(e)
    }
}