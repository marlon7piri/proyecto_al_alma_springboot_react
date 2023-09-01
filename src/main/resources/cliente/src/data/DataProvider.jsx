import React, { createContext, useEffect, useState } from "react";

import {
  cargarGastosControllers,
  crearGastoControllers,
  deleteGastosControllers,
} from "../controllers/GastosControllers";
import { toast } from "react-hot-toast";
import { getProductosControllers } from "../controllers/ProductosControllers";

export const DataContext = createContext();

function DataProvider(props) {
  const number = 10;

  const [gastos, setGastos] = useState([]);
  const [productos, setProductos] = useState([])
  const [resultsearch, setResultsearch] = useState([]);
  const [search, setSearch] = useState("");
  const [shadow, setShadow] = useState(false);
  const [gastotatal, setGastotatal] = useState(10);
  const [optionSelected, setOptionSelected] = useState();
  const [isloading, setIsloading] = useState(false);

  const getData = async () => {
    const gastos = await cargarGastosControllers();

    setGastos(gastos.data);
    console.log(gastos.data);
    setResultsearch(gastos.data);
  };


  const getProductos =async()=>{
    const productos = await getProductosControllers()
    setProductos(productos.data);
    console.log(productos.data);
  }

  

  useEffect(() => {
    getData();
    getProductos()
  }, []);

  const deleteGastos = async (id) => {
   
    const data = await deleteGastosControllers(id);

    toast.success("Gasto borrado correctamente");
    setGastos(gastos.filter((e) => e.id !== data.data.id));
    setResultsearch(gastos.filter((e) => e.id !== data.data.id));
   
  };          
  const filtrarBusquedaNombre=()=>{
  
    if (!search) {
       setResultsearch(gastos);
    } else {
      setResultsearch(gastos.filter((gasto) =>
     gasto.motivo.toLowerCase().includes(search.toLowerCase())
   ))
    }
  }                                          

  const handlerChange = (value) => {
    setSearch(value.target.value);
    filtrarBusquedaNombre()
  };

  const crearGasto = async (newgasto) => {
    const data = await crearGastoControllers(newgasto);
    setIsloading(true);
    toast.success("Gasto creado correctamente");
    setGastos([...gastos, data.data]);
    setResultsearch([...gastos, data.data]);
    
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




  return (
    <DataContext.Provider
      value={{
        number,
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
        setIsloading,resultsearch,productos
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
