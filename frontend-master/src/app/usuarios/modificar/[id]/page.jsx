"use client";
export default function Modificar({ params }) {
    const usuario = JSON.parse(decodeURIComponent(params.id));

    const modificarUsuario = async (e) => {
        e.preventDefault();

        const data = {
            id: usuario.id,
            nombre: document.getElementById("nombre").value,
            usuario: document.getElementById("usuario").value,
            password: document.getElementById("password").value,
        };

        const url = "http://localhost:3000/usuarios/modificarUsuario";

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        location.replace("http://localhost:3001/usuarios/mostrar");
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f8d7da' }}>
            <form style={{ width: '40%', marginTop: '5%', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={modificarUsuario}>
                <div style={{ backgroundColor: '#dc3545', color: '#fff', padding: '15px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                    <h1 style={{ textAlign: 'center' }}>Modificar Usuario</h1>
                </div>
                <div style={{ padding: '20px' }}>
                    <input id="id" defaultValue={usuario.id} type="text" style={hiddenInputStyle} />
                    <input id="nombre" defaultValue={usuario.nombre} type="text" placeholder="Nombre" style={inputStyle} />
                    <input id="usuario" defaultValue={usuario.usuario} type="text" placeholder="Usuario" style={inputStyle} />
                    <input id="password" required placeholder="Nuevo password" type="text" style={inputStyle} />
                </div>
                <div style={{ padding: '15px' }}>
                    <button type="submit" style={buttonStyle}>Guardar cambios</button>
                </div>
            </form>
        </div>
    );
}

// Estilo para los inputs
const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

// Estilo para el input oculto
const hiddenInputStyle = {
    display: 'none',
};

// Estilo para el botón
const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff', // Azul para el botón
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

