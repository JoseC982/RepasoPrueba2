import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Listausuarios from "./componentes/Listausuarios";
import Usuario from "./componentes/Usuario";
import CrearUsuario from "./componentes/Crearusuario";

function App() {

  const [usuarios, setUsuarios] = useState([{
    id: 1,
    nombre: "Juan Perez",
    email: "juanp@gmail.com",
    edad: 25
  },
  {
    id: 2,
    nombre: "Diana Lopez",
    email: "dian@gmail.com",
    edad: 32
  }
  ]);

  const [state, setState] = useState(
    {id: "",
    nombre: "",
    email: "",
    edad: ""}
  );

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios((prev) => [...prev, nuevoUsuario]);
  };



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/listausuarios" element={<Listausuarios usuarios={usuarios} />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/crearUsuario" element={
          <CrearUsuario 
          state={state} 
          setState={setState}
          agregarUsuario={agregarUsuario}
          />
          } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;