import React, { useContext } from 'react'
import TablaDeGastos from './TablaDeGastos'
import BusquedaInput from './BusquedaInput'
import Formulario from './Formulario'
import { DataContext } from '../data/DataProvider'



function Gastos() {

  const {gastotatal}=useContext(DataContext)
  return (
    <div className='w-[900px]  p-4 ml-8'>

      <h1 className='mb-10'>Gastos</h1>
      <h2 className='text-gray-900 font-bold'>Gasto Total: <span className='
      text-sky-900 font-black text-2xl'>${gastotatal}</span></h2>
      
     
   <TablaDeGastos/>
  
   
    </div>
  )
}

export default Gastos