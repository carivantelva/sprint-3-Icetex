

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

import { Header } from '../../layout/Header';
import { Footer } from '../../layout/Footer';

function Logup() {
    const validateForm = () => {
        // Aquí puedes agregar la lógica de validación del formulario si es necesario
        return true; // Cambia esto según tus necesidades
    }

    return (
        <div className="container">
            <Header /> {/* Agrega el componente Footer al final de tu página */}
            <h2>Registro</h2>
            <form onSubmit={validateForm}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Dirección:</label>
                    <input type="text" id="direccion" name="direccion" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirmar Contraseña:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit" className="btn">Registrarse</button>
            </form>
            <div className="navigation">
                <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
            </div>
            <br></br>

            <Footer /> {/* Agrega el componente Footer al final de tu página */}
        </div>
    );
}

export default Logup;
