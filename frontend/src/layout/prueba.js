import { Fragment } from "react";

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>


//componente
export const App21 = () => {
    return(
    <Fragment>
    <h1>desde app21 </h1>

    <div class="container-login">
        <h2>Iniciar Sesión</h2>
        <form action="#" method="post" id="loginForm">
            <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input type="text" id="email" name="email" placeholder="Ej: micorreo@correo.com" required/>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="minimo 8 caracteres" required/>
            </div>
            <div class="forgot-password">
               
            </div>
            <button type="submit" class="btn btn-info">Iniciar Sesión</button>
        </form>
        <div class="btn-register">
            <a href="./logup.html">Registrarse</a>
        </div>
    </div>
    </Fragment>
    );
    
};
