import BorrarUsuario from "@/components/borrar";
import axios from "axios";
import Link from "next/link";

async function getUsuarios() {
    const url = "http://localhost:3000/usuarios";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Usuarios() {
    const usuarios = await getUsuarios();
    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Usuarios</h1>
            <table style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <thead>
                    <tr style={{ backgroundColor: '#dc3545', color: '#fff' }}>
                        <th style={tabEncabezado}>Id</th>
                        <th style={tabEncabezado}>Nombre</th>
                        <th style={tabEncabezado}>Usuario</th>
                        <th style={tabEncabezado}>Editar/Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i) => (
                        <tr key={i} style={i % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: '#ffffff' }}>
                            <td style={tabstyle2}>{i + 1}</td>
                            <td style={tabstyle2}>{usuario.nombre}</td>
                            <td style={tabstyle2}>{usuario.usuario}</td>
                            <td style={tabstyle2}>
                                <BorrarUsuario id={usuario.id} />
                                <> / </>
                                <Link href={`/usuarios/modificar/${encodeURIComponent(JSON.stringify({ id: usuario.id, nombre: usuario.nombre, usuario: usuario.usuario }))}`}>
                                    Modificar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Link href="/usuarios/nuevo" style={buttonStyle}>Nuevo</Link>
            </div>
        </>
    );
}

// Estilos
const tabEncabezado = {
    padding: '10px',
    border: '1px solid #ccc',
    textAlign: 'left',
    fontWeight: 'bold',
    backgroundColor: '#dc3545', // Rojo
    color: '#fff'
};

const tabstyle2 = {
    padding: '10px',
    border: '1px solid #ccc',
};

// Estilo para el botón "Nuevo"
const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'inline-block'
};

