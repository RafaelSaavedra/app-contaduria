
import "./style.css"
import Nav from "../nav/index";
//en la que sigue no pusimos hasta index pero de todos modos se va hasta ese
import Footer from "../footer";
import LOGOJ from '../../Image/Copia de LOGO MADEA2.jpg'

import {useState} from 'react'
const[user, setUser] = useState("")

function Home (){
    let statusSesion = localStorage.getItem("estatusSesion")
    console.log(statusSesion);
    //localStorage.clear("estatusSesion")
    if(statusSesion !=="Exitoso"){
        return <div>
            <Nav/>
                <div className="flex">
                    <div className="logo">
                        <img className="img-logo"  src={LOGOJ} alt= "home"/>
                    </div>
                    <form id="form-login">
                        <span className="entrada">
                            <label for="user" className="labels-form-login">Usuario</label>
                            <input type="text" name="usuario" id="user"></input>
                        </span>
                        <span className="entrada">
                            <label for="password" className="labels-form-login">Contraseña</label>
                            <input type="text" name="contraseña" id="password"></input>
                        </span>
                        <span className="entrada">
                            <input type="submit" name="iniciarSesion" id="startsession" value="Iniciar Sesion" className="labels-form-login btn-login"></input>
                        </span>
                    </form>
                </div>
            <Footer/>
        </div>
    }else{
        return <div>
            <Nav/>
            <div className="flex">
                <form id="form-login">
                    <span className="entrada">
                    <button className="labels-form-logged btn-logged">Cliente</button>
                    </span>
                    <span className="entrada">
                    <button className="labels-form-logged btn-logged">Proveedor</button>
                    </span>
                    <span className="entrada">
                    <button className="labels-form-logged btn-logged">Producto</button>
                    </span>
                    <span className="entrada">
                    <button className="labels-form-logged btn-logged">Materia prima</button>
                    </span>
                    <span className="entrada">
                    <button className="labels-form-logged btn-login">Herramientas</button>
                    </span>
                    <span className="entrada">
                    <button className="labels-form-logged btn-login">Configuracion</button>
                    </span>
                </form>
                <div>
                <img className="img-logo"  src={LOGOJ} alt= "home"/>
                </div>
            </div>
            <Footer/>
        </div>
    }
}

export default Home