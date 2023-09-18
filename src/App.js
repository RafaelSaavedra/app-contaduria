//import logo from './logo.svg';
//import './App.css'

import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import Cliente from "./components/clientes";
import Proveedor from "./components/proveedores";
import MatPrima from "./components/matPrimas";
import Producto from "./components/productos";
import Ingreso from "./components/ingresos";
import Egreso from "./components/egresos";
import Herramientas from "./components/herramientas";
import Configuracion from "./components/configuracion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route Component={Home}
        path="/"/>
        <Route Component={Cliente} path="/cliente"/>
        <Route Component={Proveedor} path="/proveedor"/>
        <Route Component={MatPrima} path="/matPrima"/>
        <Route Component={Producto} path="/producto"/>
        <Route Component={Ingreso} path="/ingreso"/>
        <Route Component={Egreso} path="/egreso"/>
        <Route Component={Herramientas} path="/herramientas"/>
        <Route Component={Configuracion} path="/configuracion"/>
      </Routes>
    </div>
  );
}



export default App;