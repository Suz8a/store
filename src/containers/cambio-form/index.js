import React, { useState } from "react";
import DynamicForm from "../../components/dynamic-form";

function CambioForm() {
  const [nomCliente, setnomCliente] = useState("");
  const [aPaterno, setaPaterno] = useState("");
  const [aMaterno, setaMaterno] = useState("");
  const [telefono, settelefono] = useState("");
  const [correo, setcorreo] = useState("");

  function handleNombre(e) {
    setnomCliente(e.target.value);
  }

  function handleAPaterno(e) {
    setaPaterno(e.target.value);
  }

  function handleAMaterno(e) {
    setaMaterno(e.target.value);
  }

  function handleTelefono(e) {
    settelefono(e.target.value);
  }

  function handleCorreo(e) {
    setcorreo(e.target.value);
  }
  function onClickCancelar() {}

  function onClickAceptar() {}

  console.log(nomCliente);
  console.log(aPaterno);
  console.log(aMaterno);
  console.log(telefono);
  console.log(correo);

  return (
    <DynamicForm
      title="Cambio de Tamaño"
      cliente="true"
      producto="true"
      medidas="true"
      descripcion="true"
      materialAdjunto="true"
      materialUtilizar="true"
      presupuesto="true"
      handleNombre={handleNombre}
      handleAPaterno={handleAPaterno}
      handleAMaterno={handleAMaterno}
      handleTelefono={handleTelefono}
      handleCorreo={handleCorreo}
      onClickCancelar={onClickCancelar}
      onClickAceptar={onClickAceptar}
    />
  );
}

export default CambioForm;
