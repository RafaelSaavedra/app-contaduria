
import "./style.css"
import Nav from "../nav/index";
//en la que sigue no pusimos hasta index pero de todos modos se va hasta ese
import Footer from "../footer";
import LOGOJ from '../../Image/Copia de LOGO MADEA2.jpg'
import {useState} from 'react'
import Swal from "sweetalert2"
import { Link } from "react-router-dom";

function Home (){
    //UseState nos ayudará a tomar los valores del input en este caso será para usuario y password
    const[user, setUser] = useState("")
    const [password, setPassword] = useState("")
    let usuario = "RafaelSaavedra"
    let contraseña = "Carlos5"

    let statusSesion = localStorage.getItem("estatusSesion")

    console.log(user);
    console.log(password);

    function inputChangeUser (event){
        setUser (event.target.value) 
        console.log(event)
    }
    function inputChangePassword(event){
        setPassword (event.target.value)
        console.log(event)
    }
    function onClickLogin(event){
        event.preventDefault()
        if (usuario === user){
            if(contraseña === password){
                localStorage.setItem("estatusSesion", "Exitoso")
                window.location.reload()
            }else{
                modalError()
            }
        }else{
            //alert("Usuario o contraseña incorrecto")
            modalError()
        }
    } 

    function modalError(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'usuario o contraseña equivocado!'
        })
    }
    //localStorage.clear("estatusSesion")
    if(statusSesion !== "Exitoso"){
        return <div>
            <Nav/>
                <div className="flex">
                    <div className="logo">
                        <img className="img-logo"  src={LOGOJ} alt= "home"/>
                    </div>
                    <form id="form-login">
                        <span className="entrada">
                            <label for="user" className="labels-form-login">Usuario</label>
                            <input type="text" name="usuario" id="user" value={user} onChange={inputChangeUser}></input>
                        </span>
                        <span className="entrada">
                            <label for="password" className="labels-form-login">Contraseña</label>
                            <input type="text" name="contraseña" id="password" value={password} onChange={inputChangePassword}></input>
                        </span>
                        <span className="entrada">
                            <input type="submit" name="iniciarSesion" id="startsession" value="Iniciar Sesion" className="labels-form-login btn-login" onClick={onClickLogin}></input>
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
                    <Link to= "/cliente" className="labels-form-logged btn-logged form-logged">Cliente</Link>
                    </span>
                    <span className="entrada">
                    <Link to= "/proveedor" className="labels-form-logged btn-logged form-logged">Proveedor</Link>
                    </span>
                    <span className="entrada">
                    <Link to="/ingreso" className="labels-form-logged btn-logged form-logged">Ingreso</Link>
                    </span>
                    <span className="entrada">
                    <Link to="/egreso" className="labels-form-logged btn-logged form-logged">Egreso</Link>
                    </span>
                    <span className="entrada">
                    <Link to="/producto" className="labels-form-logged btn-logged form-logged">Producto</Link>
                    </span>
                    <span className="entrada">
                    <Link to="/matPrima" className="labels-form-logged btn-logged form-logged">Materia prima</Link>
                    </span>
                    <span className="entrada">
                    <Link to="herramientas" className="labels-form-logged btn-logged form-logged">Herraminentas</Link>
                    </span>
                    <span className="entrada">
                    <Link to="configuracion" className="labels-form-logged btn-logged form-logged">Configuracion</Link>
                    </span>
                </form>
                <div className="logo">
                <img className="img-logo"  src={LOGOJ} alt= "home"/>
                </div>
            </div>
            <Footer/>
        </div>
    }
}

export default Home