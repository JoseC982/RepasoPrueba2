import React from "react";
import Usuario from "./Usuario";
import { Link, useNavigate } from "react-router-dom";
import "../estilos/ListaUsuarios.css";

function listaUsuarios({usuarios}) {



    return (
        <div className="containerListaUsuarios">
            <div className="encabezado">
                <h1>Available developers</h1>
                {/* <p>Aquí se mostrará la lista de usuarios registrados en la aplicación.</p>
                <p>Utiliza el menú para navegar entre las diferentes secciones.</p>
                <p>Próximamente podrás ver los usuarios registrados.</p> */}
                <Link to="/crearUsuario">
                <button className="botones">Crear usuario</button>
                </Link>
            </div>
            <div className="usersCards">
                {usuarios.map((usuarios, index) => (
                    <Usuario key={index} nombre={usuarios.nombre} email={usuarios.email} edad={usuarios.edad} />
                ))}

            </div>
        </div>
    );
}

export default listaUsuarios;