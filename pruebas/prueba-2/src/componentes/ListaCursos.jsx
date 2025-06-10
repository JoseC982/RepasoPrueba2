import React from "react";
import Curso from "./Curso";
import { Link, useNavigate } from "react-router-dom";
import "../estilos/ListaCursos.css";

function listaCursos({curso, eliminarCurso}) {

    return (
        <div className="containerListaCursos">
            <div className="encabezado">
                <h1>LISTA DE CURSOS</h1>
                <Link to="/crear">
                <button className="botones">Crear curso</button>
                </Link>
            </div>
            <div className="courseCards">
                {curso.map((curso, index) => (
                    <Curso key={index} index={index} nombre={curso.nombre} nivel={curso.nivel} duracion={curso.duracion} eliminarCurso={eliminarCurso}/>
                ))}

            </div>
        </div>
    );
}

export default listaCursos;