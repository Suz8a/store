import React from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import theme from "./theme";
import Build from "@material-ui/icons/Build";
import Recepcionista from "./layout/recepcionista";

const data = [
  {
    folio: "12345",
    cliente: "Suzclem Adriana Ochoa Casillas",
    servicio: "Reparación",
    estado: "Procesando"
  },
  {
    folio: "22222",
    cliente: "Jesus Abraham Zavala Quintero",
    servicio: "Pulido",
    estado: "En Taller"
  }
];

function App() {
  const tableData = data.map(({ folio, cliente, servicio, estado }) => {
    let status = "";
    if (estado === "En Taller") {
      status = (
        <div style={{ color: "blue" }}>
          <Build></Build> En taller{" "}
        </div>
      );
    }
    if (estado === "Procesando") {
      status = (
        <div style={{ color: "gray" }}>
          <Build></Build> Procesando{" "}
        </div>
      );
    }
    return {
      Folio: folio,
      Cliente: cliente,
      Servicio: servicio,
      Estado: status
    };
  });
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <Recepcionista />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
