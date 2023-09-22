import Nav from "../nav/index";
import Footer from "../footer";
import "./styles.css"
import { useEffect, useState } from "react";
import CHYOG from '../../Image/CH YOGURT-1.jpg'

//let imagenes = {};
//imagenes = {CHYOG: "CH YOGURT-1.jpg", ChAlg: "CH ALG-1.jpg"}

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
            return<div class="wrap animate pop">{element.nombre}    
		<div class="overlay">
			<div class="overlay-content animate slide-left delay-2">
				<h1 class="animate slide-left pop delay-4">MADEA</h1>
				<p class="animate slide-left pop delay-5 animo">DIVISION: <em>Cereales</em></p>
			</div>
			<div class="image-content animate slide delay-5"></div>
					<div class="dots animate">
						<div class="dot animate slide-up delay-6"></div>
						<div class="dot animate slide-up delay-7"></div>
						<div class="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div class="text">
				<p><img class="inset" src={CHYOG} alt="" />{element.nombre}LAS CHISPAS DE YOGURT SON BUENAS Y MUY SABROSAS <em>Plantae</em>. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier. Su precio es: {element.precio}</p>
				<p>Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.</p>
				<p>{element.nombre}</p>
			</div>
	</div>  
     })}
     <Footer/>     
        </div>
}

export default Producto