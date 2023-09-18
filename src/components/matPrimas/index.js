import Nav from "../nav/index";
import Footer from "../footer";
import { useEffect, useState } from "react";

function MatPrima (){
    //return <h1>Hola Mundo Materias Primas</h1>
    const [matPrim, setMatPrim] = useState([])
    

    useEffect(()=> {
        fetch("http://localhost:3001/api/matPrimas"
        ).then(json => json.json())
        .then(result => {
            setMatPrim(result.matPrimasarray)
        }).catch( error => console.log(error))
    },[])
    
    return<div>
        <Nav/>
        {matPrim.map(element => {
            return<h1>{element.nombre}</h1>  
        }) }
        <Footer/>
    </div>
    

}

export default MatPrima