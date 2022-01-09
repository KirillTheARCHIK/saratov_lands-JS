import axios from 'axios'
import fieldsJSON from '../data/fields.json'


export const $host=axios.create({
    baseURL: ''
})
// export const =async()=>{
//     await $host.get(``)
// }

// export const =async()=>{
//     const {data}=await $host.get(``)
//     return data
// }

// export const selectOneCard=async(id)=>{
//     const {data}=await $host.get(`api/source/get/${id}`)
//     return data
// }

export const selectOneField=async(id)=>{
    const data=await fieldsJSON.data.find((item)=>item.id==id)
    return data
}
