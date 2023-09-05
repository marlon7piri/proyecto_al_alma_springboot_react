import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/DataProvider";
import { useModal } from "./modals/useModal";
import Modal from "./modals/Modal";
import { Toaster } from "react-hot-toast";
import FormularioProductos from "./FormularioProductos";
import TablaProductos from "./TablaProductos";
import BusquedaInput from "./BusquedaInput";

function Productos() {
  const { productos, search, deleteGastos,deletedProducto } = useContext(DataContext);
  const [
    isOpenModalFormularioProductos,
    openModalFormularioproductos,
    closeModalFormularioProductos,
  ] = useModal(false);

 

  let result = [];
  if (!search) {
    result = productos;
  } else {
    result = productos.filter((gasto) =>
      gasto.motivo.toLowerCase().includes(search.toLowerCase())
    );
  }

  const categorias = [
   "Secos",
  " Soft Drinks",
  "Jugos de frutas",
   "Lacteos",
    "Mezcladores",
   "Alcohol",
   "Produccion",
   "Papeleria",
   "Limpieza",
  "Packaging",           
   "Edulcorante",
    "Siropes" 
    
  ];

  

  return (
    <div className=" w-[900px] ml-8 p-4 relative">
      <section>
        {" "}
        <button
          onClick={openModalFormularioproductos}
          type="button"
          className="focus:outline-none text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-colors duration-300 ml-4"
        >
          Nuevo
        </button>
      </section>

      <Modal
        isOpen={isOpenModalFormularioProductos}
        closeModal={closeModalFormularioProductos}
      >
        <FormularioProductos />
      </Modal>

      <BusquedaInput categorias={categorias}/>
      <TablaProductos productos={result}   categorias={categorias}  deletedProducto={deletedProducto}/>
      <Toaster />
    </div>
  );
}

export default Productos;
