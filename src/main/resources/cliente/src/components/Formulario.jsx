import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/DataProvider";

function Formulario() {
  const { shadow, setShadow, crearGasto, gastos, getData,isloading,setIsloading } =
    useContext(DataContext);
  const [newmotivo, setNewMotivo] = useState("");
  const [newcategoria, setNewCategoria] = useState("todos");
  const [newmonto, setNewmonto] = useState(null);

  const show2 = shadow
    ? "bg-gray-50 w-full h-full "
    : "hidden transition duration-500 ";

  const date = new Date().toISOString();

  const newGasto = {
    motivo: newmotivo,
    monto: parseFloat(newmonto),
    fecha: date.substring(0, 10),
    categoria: newcategoria,
  };

  const hanlderSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true)
    console.log(newGasto.monto);
    await crearGasto(newGasto);
    setNewMotivo("")
    setNewmonto("")
    setNewCategoria("todos")
    setIsloading(false)
    setShadow(!shadow);
  }; 

 

  return (
    <div className={`modal : ${shadow && "modal is-open"}`}>
      <div className="w-full h-full  p-8">
        <div className="w-full flex justify-between items-center p-4 rounded-md mb-4">
          <h1 className="text-gray-50 text-4xl font-black z-50">
            Crear Gastos
          </h1>
          <button
            onClick={() => setShadow(!shadow)}
            type="button"
            className="focus:outline-none text-white bg-red-500 hover:bg-sky-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-colors duration-300"
          >
            cerrar
          </button>
        </div>

        <section className="container-formularios">
          <form onSubmit={hanlderSubmit}>
            <div className="mb-6 ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Motivo de Gasto:
              </label>
              <input
                type="text"
                id=""
                value={newmotivo}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="motivo de gasto"
                required
                onChange={(e) => setNewMotivo(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Monto:
              </label>
              <input
                type="text"
                id="monto"
                value={newmonto}
                placeholder="200"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) => setNewmonto(e.target.value)}
              />
            </div>
            <div className="mb-6 ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Categoria:
              </label>
              <select name="" id="" value={newcategoria} onChange={(e)=>setNewCategoria(e.target.value)} >
                <option value="todos">todos</option>
                <option value="cocina">cocina</option>
                <option value="barra">barra</option>
               
              </select>
            </div>
{!isloading ? (<button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    
    Crear
</button>): (<button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
</button>) }
            
            
            
          </form>
        </section>
      </div>
    </div>
  );
}

export default Formulario;
