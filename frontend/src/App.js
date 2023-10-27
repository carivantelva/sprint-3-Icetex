import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

export const App = () => {
  return (
    <Fragment>

      <Header /> {/* Agrega el componente Footer al final de tu página */}

      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <a className="nav-link" href="/">Ropero Lily</a>

          </div>
          <div>
            <a className="nav-link" href="/">Inicio  </a>

          </div>
          
          <div><a className="nav-link" href="/prendas">Prendas</a></div>
          <form className="d-flex">

            <input className="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Búsqueda" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
          <div>
            <a className="nav-link" href="/login">Inicio Sesión</a>
          </div>
        </div>
      </nav>
      <section id="informacion-sitio" className="bg-light p-4">
        <div className="container">
          <div className="container mt-4">
            <div className="row" id="productos-container">
              {/* Los productos se cargarán aquí dinámicamente */}

              <h1>aqui van los productos cargado dinamicamente</h1>
            </div>
          </div>
        </div>
      </section>

      <Footer /> {/* Agrega el componente Footer al final de tu página */}


    </Fragment>
  );
};
