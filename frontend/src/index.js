import React from "react";
import ReactDOM from "react-dom/client"
import{Hello} from "./Hello-world"
import './styless.css'
import { App21 } from "./layout/prueba";
import {App} from "./App"
import Login from  "./Components/login/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import Logup from "./Components/logup/Logup";
import ProductList from "./Components/productos/products";


//Renderizacion
ReactDOM.createRoot(document.getElementById('root')).render(
    

   <BrowserRouter>
    <React.StrictMode>
        <Routes>
            <Route path="index"Component={App}> </Route>
            <Route path="Login"Component={Login}> </Route>
            <Route path="Hello"Component={Hello}> </Route>
            <Route path="App21"Component={App21}> </Route>
            <Route path="Footer"Component={Footer}> </Route>
            <Route path="Header"Component={Header}> </Route>
            <Route path="Logup"Component={Logup}> </Route>
            <Route path="ProductList"Component={ProductList}> </Route>
            
          
            
            


        </Routes>
    </React.StrictMode>

    </BrowserRouter>
);