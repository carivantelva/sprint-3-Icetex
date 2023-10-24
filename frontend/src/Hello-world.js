import { Fragment } from "react";


//componente
export const Hello = () => {
    return(
    <Fragment>
        <h1>desde Hello world</h1>
    <h1>Hola mundo Ingrato</h1>

    <p>Aprendamos React</p>
    <button onClick={Activar}>Activar boton</button>
    </Fragment>
    );
    
};
function Activar(){
    alert ("el boton ha sido activado")
}