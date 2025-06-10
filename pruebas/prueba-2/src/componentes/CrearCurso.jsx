import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../estilos/CrearCurso.css";

function CrearCurso(props) {
    const navigate = useNavigate();
    const [errores, setErrores] = useState({
        nombre: "",
        nivel: "",
        duracion: ""
    });

    // Validaciones individuales
    const validarNombre = (nombre) => {
        if (nombre.trim().length < 5) return "Debe tener al menos 5 caracteres";
        return "";
    };
    const validarNivel = (nivel) => {
        if (!["Basico", "Intermedio", "Avanzado"].includes(nivel)) return "Nivel no válido";
        return "";
    };
    const validarDuracion = (duracion) => {
        if (duracion < 10 || duracion > 100) return "Duración entre 10 y 100";
        return "";
    };

    // Handlers de cambio
    const handleNombre = (e) => {
        const nombre = e.target.value;
        props.setState({ ...props.state, nombre });
        setErrores({ ...errores, nombre: validarNombre(nombre) });
    };
    const handleNivel = (e) => {
        const nivel = e.target.value;
        props.setState({ ...props.state, nivel });
        setErrores({ ...errores, nivel: validarNivel(nivel) });
    };
    const handleDuracion = (e) => {
        const duracion = e.target.value;
        props.setState({ ...props.state, duracion });
        setErrores({ ...errores, duracion: validarDuracion(duracion) });
    };

    const handleAgregarCurso = (event) => {
        event.preventDefault();
        // Validar todos los campos antes de enviar
        const errNombre = validarNombre(props.state.nombre);
        const errNivel = validarNivel(props.state.nivel);
        const errDuracion = validarDuracion(props.state.duracion);
        setErrores({
            nombre: errNombre,
            nivel: errNivel,
            duracion: errDuracion
        });
        if (errNombre || errNivel || errDuracion) return;

        const nuevoCurso = {
            id: props.state.id,
            nombre: props.state.nombre,
            nivel: props.state.nivel,
            duracion: props.state.duracion
        };
        props.agregarCurso(nuevoCurso);
        alert("Curso creado exitosamente");
        props.setState({
            id: 0,
            nombre: "",
            nivel: "",
            duracion: 0
        });
        navigate("/listar");
    };

    return (
        <div className="containerCrearCurso">
            <div>
                <h1>Crear Curso</h1>
                <p>Aquí podrás crear un nuevo curso.</p>
                <Link to="/listar">
                    <button>Regresar a la lista de usuarios</button>
                </Link>
            </div>
            <div>
                <form>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={props.state.nombre}
                            onChange={handleNombre}
                        />
                        {errores.nombre && <div style={{ color: "brown" }}>{errores.nombre}</div>}
                    </div>
                    <div>
                        <label>Nivel:</label>
                        <select
                            value={props.state.nivel}
                            onChange={handleNivel}
                        >
                            <option value="">Seleccione nivel</option>
                            <option value="Basico">Basico</option>
                            <option value="Intermedio">Intermedio</option>
                            <option value="Avanzado">Avanzado</option>
                        </select>
                        {errores.nivel && <div style={{ color: "brown" }}>{errores.nivel}</div>}
                    </div>
                    <div>
                        <label>Duracion:</label>
                        <input
                            type="number"
                            value={props.state.duracion}
                            onChange={handleDuracion}
                        />
                        {errores.duracion && <div style={{ color: "brown" }}>{errores.duracion}</div>}
                    </div>
                    <button onClick={handleAgregarCurso}>Guardar</button>
                </form>
            </div>
        </div>
    );
}
export default CrearCurso;