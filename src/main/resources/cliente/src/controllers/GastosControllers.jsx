import API_URL from "../data/api"
import axios from 'axios'




export const cargarGastosControllers = async ()=>{
 return await axios.get(`${API_URL}/gastos`)
  
}


export const deleteGastosControllers =async(id)=>{
return await axios.delete(`${API_URL}/gastos/${id}`)


}

export const crearGastoControllers =async(newgasto)=>{

  return await axios.post(`${API_URL}/gastos`,newgasto)

}