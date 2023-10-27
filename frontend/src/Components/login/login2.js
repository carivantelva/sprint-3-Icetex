import React from 'react';

import './login.css'; // Importa el archivo de estilos
import 'bootstrap/dist/css/bootstrap.css';


//import { Link } from 'react-router-dom';
//import { Header } from '../../layout/Header';
//import { Footer } from '../../layout/Footer';


function LoginForm() {
  return (
    <div className="container-login">
      <h2>Iniciar Sesión</h2>
      <form action="#" method="post" id="loginForm">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="text" id="email" name="email" placeholder="Ej: micorreo@correo.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" placeholder="minimo 8 caracteres" required />
        </div>
        <div className="forgot-password">
          <a href="#" id="olvidasteContrasena">¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit" className="btn btn-info">Iniciar Sesión</button>
      </form>
      <div className="btn-register">
        <a href="./logup.html">Registrarse</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <LoginForm />
      <div className="btn-register">
        <a href="index.html">Volver a la página de inicio</a>
      </div>
    </div>
  );
}

export default App;
