import Nav from "../nav/index";
import Footer from "../footer";
import { useEffect, useState } from "react";




function Proveedor (){
    //return <h1>Hola Mundo Proveedores</h1>
    const [providers, setProviders] = useState([])
    

    useEffect(()=> {
        fetch("http://localhost:3001/api/proveedores"
        ).then(json => json.json())
        .then(result => {
            setProviders(result.proveedores)
        }).catch( error => console.log(error))
    },[])
    
    return<div>
        <Nav/>
        {providers.map(element => {
            return<h1>{element.nombre}</h1>  
        }) }
        <Footer/>
    </div>
    

}

export default Proveedor