import Nav from "../nav/index";
import Footer from "../footer";
import { useEffect, useState } from "react";
import "./styles.css"
import close from '../../Image/cerrar.png'


function Cliente (){

    const [viewdiv, setViewdiv] = useState(false)
    const [clients, setClients] = useState([])
    const [products, setProducts] = useState([]);
    //function findByIdClient va a recibir un parametro que es el id del cliente
    function findByIdClient(id){
        //aqui el fetch hace un get con el id especifico de ese cliente
        fetch(`http://localhost:3001/api/clientes/${id}`)
        //en este punto el json se limpia a solo lo que queremos
        .then(json => json.json())
        //si todo esta bien lo agarramos como un result y lo ponemos con set products
        .then(result => {
            setProducts(result.cliente.productos)
        }).catch( error => console.log(error))
    }

    useEffect(()=> {
        fetch("http://localhost:3001/api/clientes"
        ).then(json => json.json())
        .then(result => {
            setClients(result.clientes)
        }).catch( error => console.log(error))
    },[])

    //statusProducts = "!MostrarProductos"
//esta funcion al ocurrir el evento de hacer click llama a la otra funcion 
    function onClickProducts(event){
        //aqui se impide que recargue la pagina
        event.preventDefault()
        //aqui llama a la funcion a través de su respectivo id 
        findByIdClient(event.target.id)
        setViewdiv(true)  
    } 
    
    function onClickCerrar(event){
        event.preventDefault()
        setViewdiv(false)
    } 
    console.log(products)
    
    function creacionDeModal (products){
        console.log("mostrar:"+products )
        return <div className="modal-products">
        <div className="modal-container">
            <img className="modal-close" src={close} onClick={onClickCerrar} alt="Cerrar" ></img>
            
            <ol className="modal-prod">
            <div className="modal-product">
                {products.map(product => {
                console.log(product)
                return<li>{product.nombre}</li>
                })}
                </div>
            </ol>
            
        </div>
    </div>
    }

    return<div>
            <Nav/>
            <div className="contain-global"> {clients.map(client => {
                return<span className="cards">
                <h1 className="font-text">Informacion del cliente</h1>
                <h3 className="font-text">Nombre: {client.nombre}</h3>
                <p className="font-text">Clave: {client.clave}</p>
                <p className="font-text">correo: {client.correoE}</p>
                <button className="font-text btn-style"type="submit" name="mostrarProductos" id={client._id} value="Mostrar Productos" onClick={onClickProducts}
                >Ver Productos</button>
                </span> 
                })}
            </div>
            {viewdiv && (creacionDeModal(products))}
            <Footer/> 
        </div>          
        
    }
    export default Cliente;