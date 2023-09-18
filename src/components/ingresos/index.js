import Nav from "../nav/index";
import Footer from "../footer";
import { useEffect, useState } from "react";

function Ingreso (){
    //return <h1>Hola Mundo Ingresos</h1>
    const [ingress, setIngress] = useState([])
    

    useEffect(()=> {
        fetch("http://localhost:3001/api/ingresos"
        ).then(json => json.json())
        .then(result => {
            setIngress(result.ingresosArray)
        }).catch( error => console.log(error))
    },[])
    
    return<div>
        <Nav/>
        {ingress.map(element => {
            return<h1>{element.producto}</h1>  
        })}
        <Footer/>
    </div>
    

}

export default Ingreso