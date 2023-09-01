import React from "react";
import { useModal } from "./useModal";
import FormularioProductos from "../FormularioProductos";
import Modal from "./Modal";

export default function Modals() {
  const [
    isOpenModalFormularioProductos,
    openModalFormularioproductos,
    closeModalFormularioProductos,
  ] = useModal(false);
  return (
    <div>

     
      <Modal
        isOpen={isOpenModalFormularioProductos}
        closeModal={closeModalFormularioProductos}
      >
        <FormularioProductos />
      </Modal>
    </div>
  );
}
