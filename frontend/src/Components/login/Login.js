
import React from 'react'; // Importa React
import './login.css'; // Importa el archivo de estilos
import 'bootstrap/dist/css/bootstrap.css';


import { Link } from 'react-router-dom';
import { Header } from '../../layout/Header';
import { Footer } from '../../layout/Footer';

function Login() {
    return (
        <div>
            <Header /> {/* Agrega el componente Footer al final de tu página */}

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
                    <button type="submit" className="btn btn-info">Iniciar Sesión </button>
                </form>
                <div className="btn-register">
                <a href="/Logup">Registrarse</a> {/* con esta Logup registrarse  */}
                    <br></br>
                    <Link to="/Footer">  Ir a Footer ejemplo</Link>
                </div>
            </div>
            <Footer /> {/* Agrega el componente Footer al final de tu página */}
        </div>
    );
}

export default Login;
