import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();

    const handleNavListaUsuarios = () => {
        navigate("/listaUsuarios");
    }

    const handleNavCrearUsuario = () => {
        navigate("/crearUsuario");
    }

    return (
        <div className="container">
            <div className="firstFormNav">
                <h1>Bienvenido a la Aplicación de Usuarios</h1>
                <p>Esta aplicación te permite gestionar usuarios de manera sencilla.</p>
                <p>Utiliza el menú para navegar entre las diferentes secciones.</p>
                <button onClick={handleNavListaUsuarios}>Ver lista de usuarios en la app</button>
                <span>No tienes cuenta? Registrate!</span>
                <button onClick={handleNavCrearUsuario}>Registrate</button>
            </div>
            <div className="secondtFormNav">
                <h1>Bienvenido a la Aplicación de Usuarios</h1>
                <p>Esta aplicación te permite gestionar usuarios de manera sencilla.</p>
                <p>Utiliza el menú para navegar entre las diferentes secciones.</p>
                <Link to="/listaUsuarios">
                <button>Ver lista de usuarios en la app</button>
                </Link>
                <span>No tienes cuenta? Registrate!</span>
                <Link to="/crearUsuario">
                <button>Registrate</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;