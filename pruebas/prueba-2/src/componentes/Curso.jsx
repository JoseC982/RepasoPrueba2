import "../estilos/Curso.css";
function curso(props) {
    const { index, id, nombre, nivel, duracion, eliminarCurso } = props;
    const handlerEliminarCurso = (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        eliminarCurso(index);
    }
    return (
        <div className="containerUser">
            <div className="userCard">
                <div className="userInfo">
                    <h1>{id}</h1>
                    <h1 className="nombreUsuario">{nombre}</h1>
                    <p>Nivel: {nivel}</p>
                    <p>Duracion: {duracion}</p>
                    <button onClick={handlerEliminarCurso}>Eliminar</button>
                </div>
            </div>
        </div>
    );
}
export default curso;