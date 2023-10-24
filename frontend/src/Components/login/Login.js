
import React from 'react'; // Importa React
import './login.css'; // Importa el archivo de estilos
import 'bootstrap/dist/css/bootstrap.css';


import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <header>
                <h1>Tienda de Ropa Usada Online</h1>
                <h2>El Ropero de Lily</h2>
            </header>

            <div className="container-login">
                <h2>Iniciar Sesión</h2>
                <form action="#" method="post" id="loginForm">
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Ej: micorreo@correo.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="mínimo 8 caracteres"
                            required
                        />
                    </div>
                    <div className="forgot-password"></div>
                    <button type="submit" className="btn btn-info">
                        Iniciar Sesión
                    </button>
                </form>
                <div className="btn-register">
                    <a href="/Hello">Registrarse</a>
                    <br></br>
                    <Link to="/Footer">  Ir a Footer</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
