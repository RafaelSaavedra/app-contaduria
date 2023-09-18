import Nav from "../nav/index";
import Footer from "../footer";
import { useEffect, useState } from "react";

function Producto (){
    //return <h1>Hola Mundo Productos</h1>
    const [products, setProducts] = useState([])
    

    useEffect(()=> {
        fetch("http://localhost:3001/api/productos"
        ).then(json => json.json())
        .then(result => {
            setProducts(result.productosarray)
        }).catch( error => console.log(error))
    },[])
    
    return<div>
        <Nav/>
        {products.map(element => {
            return<h1>{element.nombre}</h1>  
        }) }
        <Footer/>
    </div>
    

}

export default Producto