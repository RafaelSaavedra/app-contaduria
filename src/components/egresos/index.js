import Nav from "../nav/index";
import Footer from "../footer";
import { useEffect, useState } from "react";

function Egreso (){
    //return <h1>Hola Mundo Egresos</h1>
    const [egress, setEgress] = useState([])
    

    useEffect(()=> {
        fetch("http://localhost:3001/api/egresos"
        ).then(json => json.json())
        .then(result => {
            setEgress(result.egresosArray)
        }).catch( error => console.log(error))
    },[])
    
    return<div>
        <Nav/>
        {egress.map(element => {
            return<h1>{element.factura}</h1>  
        }) }
        <Footer/>
    </div>
    

}

export default Egreso