import "../estilos/Usuario.css";
function Usuario(props) {
    const { index, nombre, email, edad, eliminarUsuario } = props;
    return (
        <div className="containerUser">
            <div className="userCard">
                <div className="userInfo">
                    <h1 className="nombreUsuario">{nombre}</h1>
                    <p>{email}</p>
                    <p>{edad}</p>
                    <button onClick={()=>eliminarUsuario(index)}>Eliminar</button>
                </div>
            </div>
        </div>
    );
}
export default Usuario;