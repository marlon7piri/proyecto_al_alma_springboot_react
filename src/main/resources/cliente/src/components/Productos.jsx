import React, { useContext } from 'react'
import { DataContext } from '../data/DataProvider';
import { useModal } from './modals/useModal';
import Modal from './modals/Modal';
import FormularioProductos from './FormularioProductos';

function Productos() {

  const { productos, search, deleteGastos } = useContext(DataContext);
  const[isOpenModalFormularioProductos,
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
  return (
    <div className=" w-[900px] ml-8 p-4 relative">
      <section>  <button onClick={openModalFormularioproductos}
         
          type="button" 
          className="focus:outline-none text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-colors duration-300 ml-4"
        >
          Nuevo
        </button></section>
        
      <Modal
        isOpen={isOpenModalFormularioProductos}
        closeModal={closeModalFormularioProductos}
      >
        <FormularioProductos />
      </Modal>
     
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="table">
          <thead>
            <tr>
            {/*   <th scope="col">id</th> */}
              <th scope="col">nombre</th>
              <th scope="col">categoria</th>
              <th scope="col">cantidad</th>
              <th scope="col">precio</th>
              <th scope="col">precio_de_compra</th>
              <th scope="col">unidad</th>
              <th scope="col">accion</th>
            </tr>
          </thead>
          <tbody>
            {result.map((producto) => {
              return (
                <tr key={producto.id}>
                  {/* <th scope="row">{gasto.id}</th> */}
                  <td>{producto.nombre}</td>
                   <td className="text-red-700 font-black">{producto.categoria}</td> 
                  
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.preciodecompra}</td>
                  <td>{producto.unidad}</td>
                  <td>
                 
                    <button
                      onClick={() => deleteGastos(producto.id)}
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
                    </button>
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
    </div>
  );
}

export default Productos