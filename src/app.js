import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import home from "./componentes/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<home/>} />
        <Route path="/listaUsuarios" element={<listaUsuarios/>} />
        <Route path="/usuario" element={<usuario/>} />
        <Route path="/crearUsuario" element={<crearUsuario/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;