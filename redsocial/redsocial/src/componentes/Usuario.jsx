import "../estilos/Usuario.css";
function Usuario(props) {
    const { nombre, email, edad } = props;
    return (
        <div className="containerUser">
            <div className="userCard">
                <div className="userInfo">
                    <h1 className="nombreUsuario">{nombre}</h1>
                    <p>{email}</p>
                    <p>{edad}</p>
                </div>
            </div>
        </div>
    );
}
export default Usuario;