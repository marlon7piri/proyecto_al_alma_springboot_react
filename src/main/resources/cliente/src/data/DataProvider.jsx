import React, { createContext, useEffect, useState } from "react";

import {
  cargarGastosControllers,
  crearGastoControllers,
  deleteGastosControllers,
} from "../controllers/GastosControllers";
import { toast } from "react-hot-toast";
import { addProductControllers, deleteProducControllers, getProductosControllers } from "../controllers/ProductosControllers";

export const DataContext = createContext();

function DataProvider(props) {


  const [gastos, setGastos] = useState([]);
  const [productos, setProductos] = useState([])
 
  const [search, setSearch] = useState("");
  const [shadow, setShadow] = useState(false);
  const [gastotatal, setGastotatal] = useState(10);
  const [optionSelected, setOptionSelected] = useState();
  const [isloading, setIsloading] = useState(false);

  const getData = async () => {
    const gastos = await cargarGastosControllers();

    setGastos(gastos.data);
  

  };


  const getProductos =async()=>{
    const productos = await getProductosControllers()
    setProductos(productos.data);
    
  }

  

  useEffect(() => {
    getData();
    getProductos()
  }, []);

  const deleteGastos = async (id) => {
   
    const data = await deleteGastosControllers(id);

    toast.success("Gasto borrado correctamente");
    setGastos(gastos.filter((e) => e.id !== data.data.id));
   
   
  };          
                                          

  const handlerChange = (value) => {
    setSearch(value.target.value);
  
  };

  const crearGasto = async (newgasto) => {
    const data = await crearGastoControllers(newgasto);
    setIsloading(true);
    toast.success("Gasto creado correctamente");
    setGastos([...gastos, data.data]);
    
    
    setIsloading(false);
  };

  useEffect(() => {
    const getTotalDegastos = () => {
      let totalgastos = gastos.reduce((prev, item) => {
        return prev + item.monto;
      }, 0.0);
      setGastotatal(totalgastos.toFixed(2));
    };
    getTotalDegastos();
  }, [gastos]);


/* -----------------Funciones productos-------------------------------------- */


const crearProducto =async(newproduct)=>{
  const result  = await addProductControllers(newproduct);
  setProductos([...productos,result.data]);
  toast.success("producto creado")
}

const deletedProducto = async (idproducto)=>{
  const data = await deleteProducControllers(idproducto);
toast.success("Borrado correctamente")
  setProductos(productos.filter((producto)=>producto.id !== data.data.data.id))
}

  return (
    <DataContext.Provider
      value={{
       
        gastos,
        setGastos,
        search,
        setSearch,
        handlerChange,
        deleteGastos,
        shadow,
        setShadow,
        crearGasto,
        getData,
        gastotatal,
        optionSelected,
        setOptionSelected,
        isloading,
        setIsloading,productos,crearProducto,deletedProducto
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
