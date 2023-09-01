import React, { useContext, useState } from "react";
import { DataContext } from "../data/DataProvider";

function BusquedaInput() {
  const { handlerChange, setShadow,setOptionSelected,optionSelected } = useContext(DataContext);
 

  const categorias = [
    "todos",
    "cocina",
    "barra",
    
  ];

  
 

 const handlerChangeCategoria =(e)=>{
  setOptionSelected(e.target.value)
  
 }

  return (
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
            onChange={handlerChangeCategoria}
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
  );
}

export default BusquedaInput;
