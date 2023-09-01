import axios from 'axios'
import API_URL from '../data/api'




export const getProductosControllers =async()=>{
return await axios.get(`${API_URL}/productos`)
}