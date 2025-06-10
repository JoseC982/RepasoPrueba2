import { Link, useNavigate } from "react-router-dom";
function CrearUsuario(props) {
    const handleAgregarUsuario = (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario
        if (!camposCompletos()) {
            alert("Por favor, complete todos los campos.");
            return; // Detener el proceso si los campos no están completos
        }
        const nuevoUsuario = {
            id: props.state.id,
            nombre: props.state.nombre,
            email: props.state.email,
            edad: props.state.edad
        };
        props.agregarUsuario(nuevoUsuario);
        alert("Usuario creado exitosamente");
        console.log("Usuario agregado:", nuevoUsuario);
        props.setState({ id: "", nombre: "", email: "", edad: "" }); // Resetea el formulario
    }
    const camposCompletos = () => {
        const { nombre, email, edad } = props.state;
        return nombre.trim() !== "" && email.trim() !== "" && edad.trim() !== "";
    }
    return (
        <div className="container">
            <div>
                <h1>Crear Usuario</h1>
                <p>Aquí podrás crear un nuevo usuario.</p>
                <p>Utiliza el formulario para ingresar los datos del usuario.</p>
                <p>Próximamente podrás registrar nuevos usuarios.</p>
                <Link to="/listausuarios">
                    <button>Regresar a la lista de usuarios</button>
                </Link>
            </div>
            <div>
                {/* Aquí podrías agregar un formulario para crear un nuevo usuario */}
                <form>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" value={props.state.nombre} onChange={(e) => props.setState({ ...props.state, nombre: e.target.value })} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={props.state.email} onChange={(e) => props.setState({ ...props.state, email: e.target.value })} />
                    </div>
                    <div>
                        <label>Edad:</label>
                        <input type="number" value={props.state.edad} onChange={(e) => props.setState({ ...props.state, edad: e.target.value })} />
                    </div>
                    <button onClick={handleAgregarUsuario}>Crear Usuario</button>
                </form>
            </div>
        </div>
    );
}
export default CrearUsuario;