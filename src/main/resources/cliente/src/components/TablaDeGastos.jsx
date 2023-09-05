import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/DataProvider";
import { Toaster} from 'react-hot-toast'

function TablaDeGastos() {
  const {   deleteGastos,isLoading,search,gastos,handlerChange,optionSelected,setShadow,setGastos} = useContext(DataContext);
 
  const [filter, setFilter] = useState("todos")

 

  const categorias = [
    "todos",
    "cocina",
    "barra",
    
  ];

const handlerDelete = async (id)=>{
 
  await deleteGastos(id)
  
}


  let result =[]
  if (!search) {
    result = gastos
  } else {
    result = gastos.filter((gasto) => gasto.motivo.toLowerCase().includes(search.toLowerCase()))
 
 
  }

  const handlerfilterChange = (e)=>{
    setFilter(e.target.value)
    console.log(e.target.value);
  }

  const handlerChangeCategoria =()=>{
    

    if(filter ==="todos"){
return result
    }else{
      result  =  gastos.filter((gasto)=>{
       gasto.categoria === filter
      console.log(result);
        
            }) 
             
    }
   
    
  }


   result = handlerChangeCategoria()



  return (
    <div className=" w-full ">
      <div className="pb-4 bg-white dark:bg-gray-900 ">
      <label className="sr-only">Search</label>
      <div className="relative mt-1 flex justify-between">
        <input
          type="text"
          id="table-search" 
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar"
          onChange={handlerChange}
        />

        <div className="flex gap-4 justify-center items-center">
          <label htmlFor="">Filtrar por Categoria:</label>
          <select
            value={optionSelected}
            id=""
            className="bg-gray-100 p-2 rounded-md"
            onChange={handlerfilterChange}
          >
            {categorias.map((categoria) => {
              return (
                <option value={categoria} key={categoria}>
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </option>
              );
            })}
          </select>
        </div>

        <button
          onClick={() => setShadow(true)}
          type="button"
          className="focus:outline-none text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-colors duration-300 ml-4"
        >
          Nuevo
        </button>
      </div>
    </div>
      <div className=" w-full  relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table">
          <thead>
            <tr>
            {/*   <th scope="col">id</th> */}
              <th scope="col">Motivo</th>
              <th scope="col">Monto</th>
              <th scope="col">Categoria</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {result.map((gasto) => {
              return (
                <tr key={gasto.id}>
                  {/* <th scope="row">{gasto.id}</th> */}
                  <td>{gasto.motivo}</td>

                  {gasto.monto > 200 ? <td className="text-red-700 font-black">{gasto.monto.toFixed(2)}</td>  : <td className="text-green-500">{gasto.monto.toFixed(2)}</td>}
                    <td>{gasto.categoria}</td>
                  
                  <td>{JSON.stringify(gasto.fecha).substring(1,9)}</td>
                
                  <td>
                 {!isLoading ? ( <button
                      onClick={() => handlerDelete(gasto.id)}
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="#ffffff" d="M12 12h2v12h-2zm6 0h2v12h-2z" />
                        <path
                          fill="#ffffff"
                          d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"
                        />
                      </svg>
                    </button>) : (<button
                      onClick={() => handlerDelete(gasto.id)}
                      type="button"
                      className="text-white bg-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="#ffffff" d="M12 12h2v12h-2zm6 0h2v12h-2z" />
                        <path
                          fill="#ffffff"
                          d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"
                        />
                      </svg>
                    </button>) }
                   
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#ffffff"
                          d="M25 4.031c-.766 0-1.516.297-2.094.875L13 14.781l-.219.219l-.062.313l-.688 3.5l-.312 1.468l1.469-.312l3.5-.688l.312-.062l.219-.219l9.875-9.906A2.968 2.968 0 0 0 25 4.03zm0 1.938c.234 0 .465.12.688.343c.445.446.445.93 0 1.375L16 17.376l-1.719.344l.344-1.719l9.688-9.688c.222-.222.453-.343.687-.343zM4 8v20h20V14.812l-2 2V26H6V10h9.188l2-2z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  );
}

export default TablaDeGastos;
