import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CrearCurso from "./componentes/CrearCurso";
import ListaCursos from "./componentes/ListaCursos";
import { Link } from "react-router-dom";


function App() {
  const [curso, setCurso] = useState([
    { id: 1, nombre: "Introducción a React", nivel: "Básico", duracion: 20 },
    { id: 2, nombre: "Algoritmos Avanzados", nivel: "Avanzado", duracion: 60 }
  ]);
  const [state, setState] = useState({
    id: 0,
    nombre: "",
    nivel: "",
    duracion: 0
  });
  const agregarCurso = (nuevoCurso) => {
    setCurso((prev) => [...prev, nuevoCurso]);
  };

  const eliminarCurso = (index) => {
    console.log("Curso seleccionado", index);
    setCurso((prev) =>
      prev.filter((curso, i) => i !== index)
    );
  };


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Inicio />} /> */}
          <Route path="/crear" element={
            <CrearCurso
              state={state}
              setState={setState}
              agregarCurso={agregarCurso}
            />
          }
          />
          <Route
            path="/listar"
            element={
              <ListaCursos
                curso={curso}
                eliminarCurso={eliminarCurso}

              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
