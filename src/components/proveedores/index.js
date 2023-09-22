import Nav from "../nav/index";
import Footer from "../footer";
import { useEffect, useState } from "react";
import "./styles.css"
import close from '../../Image/cerrar.png'


function Proveedor (){
    //return <h1>Hola Mundo Proveedores</h1>
    const [providers, setProviders] = useState([])
    const [viewdiv, setViewdiv] = useState(false)
    const [matPrimas, setMatPrimas] = useState([]);

    function findByIdProvider(id){
        //aqui el fetch hace un get con el id especifico de ese cliente
        fetch(`http://localhost:3001/api/proveedores/${id}`)
        //en este punto el json se limpia a solo lo que queremos
        .then(json => json.json())
        //si todo esta bien lo agarramos como un result y lo ponemos con set products
        .then(result => {
            setMatPrimas(result.proveedor.matPrimas)
        }).catch( error => console.log(error))
    }

    useEffect(()=> {
        fetch("http://localhost:3001/api/proveedores"
        ).then(json => json.json())
        .then(result => {
            setProviders(result.proveedores)
        }).catch( error => console.log(error))
    },[])
    
    function onClickMatPrimas(event){
        //aqui se impide que recargue la pagina
        event.preventDefault()
        //aqui llama a la funcion a través de su respectivo id 
        findByIdProvider(event.target.id)
        setViewdiv(true)  
    } 
    
    function onClickCerrar(event){
        event.preventDefault()
        setViewdiv(false)
    } 
    console.log(matPrimas)
    
    function creacionDeModal (matPrimasarray){
        console.log("mostrar:"+matPrimasarray )
        return <div className="modal-products">
        <div className="modal-container">
            <img className="modal-close" src={close} onClick={onClickCerrar} alt="Cerrar" ></img>
            
            <ol className="modal-prod">
            <div className="modal-product">
                {matPrimasarray.map(matPrime => {
                console.log(matPrime)
                return<li>{matPrime.nombre}</li>
                })}
                </div>
            </ol>
            
        </div>
    </div>
    }

    return<div>
        <Nav/>
        <div className="contain-global"> {providers.map(provider => {
                return<span className="cards">
                <h1 className="font-text">Informacion del Proveedor</h1>
                <h3 className="font-text">Nombre: {provider.nombre}</h3>
                <p className="font-text">Clave: {provider.clave}</p>
                <p className="font-text">correo: {provider.correoE}</p>
                <button className="font-text btn-style"type="submit" name="mostrar MatPrimas" id={provider._id} value="Mostrar Materias Primas" onClick={onClickMatPrimas}
                >Ver Materias Primas</button>
                </span> 
                })}
            </div>
            {viewdiv && (creacionDeModal(matPrimas))}
        <Footer/>
    </div>
    
}
export default Proveedor