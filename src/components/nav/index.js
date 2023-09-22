import "./style.css"
import home from '../../Image/ci_house-03.png' 
import registro from '../../Image/ci_file-document.png'
import nuevo from '../../Image/ci_cloud-add.png'
import mas from '../../Image/ci_note-edit.png'
import ayuda from '../../Image/ci_arrows-reload-01.png'
import salir from '../../Image/ci_arrow-undo-up-right.png'

function onClickHome (e){
    //e.defaultPrevent
    console.log('Home'); 
}
function onClickRegistro (e){
    //e.defaultPrevent
    console.log('Registro'); 
}
function onClickNuevo (e){
    //e.defaultPrevent
    console.log('Nuevo'); 
}
function onClickMas (e){
    //e.defaultPrevent
    console.log('Mas'); 
}
function onClickAyuda (e){
    //e.defaultPrevent
    console.log('Ayuda'); 
}

function onClickSalir (e){
    //e.defaultPrevent
    localStorage.removeItem("estatusSesion")
    //la siguiente linea de codigo nos ayudará a refrescar la pantalla
    window.location.reload() 
    console.log('Salir');
}




function Nav (){
    //vamos a declarar una variable que se va a encargar de saber si está logeado o no el usuario
    let estatusSesion = localStorage.getItem("estatusSesion");
    //En el return solamente vamos a retornar lo que es HTML y algunas variables
    //console.log(estatusSesion);
    //Con la siguiente linea de codigo se asigna un valor, y la estructura es: el primer atributo es la key y el segundo es el valor, siempre que queramos acceder al valor o remover vamos a ocupar la key

    //localStorage.setItem("estatusSesion", "Exitoso")
    //localStorage.removeItem("estatusSesion")

    /*
    function onClickSalir (e){
        //e.defaultPrevent
        console.log('Salir');
        localStorage.removeItem("estatusSesion") 
    }
    */
    if(estatusSesion === "Exitoso"){
        return<div className="nav-global-log">
            <span className="espan" onClick={onClickHome}>
                <label className="navegador"></label>
                <img className= "imagen-general" src={home} alt= "regresar a home"/>
            </span>
            <span className="espan" onClick={onClickRegistro}>
                <img className= "imagen-general" src={registro} alt= "registrarse"/>
            </span>
            <span className="espan" onClick={onClickNuevo}>
                <img className= "imagen-general" src={nuevo} alt= "ir a nuevo"/>
            </span>
            <span className="espan" onClick={onClickMas}>
                <img className= "imagen-general" src={mas} alt= "ir a mas"/>
            </span>
            <span className="espan" onClick={onClickAyuda}>
                <img className= "imagen-general" src={ayuda} alt= "ir a ayuda"/>
            </span>
            <span className="espan" onClick={onClickSalir}>
                <img className= "imagen-general" src={salir} alt= "salir"/>
                
            </span>
        </div>
        /*
        <div className="nav-footer">
        <span>
            <img className= "imagen-general" src={home} alt= "regresar a home"/>
        </span>
        <span>
            <img className= "imagen-general" src={registro} alt= "registrarse"/>
        </span>
    </div>
*/
    }else{
        return <div className="nav-global">
            <h1 className="nav-titulo">Cereales Maria del Angel</h1>
        </div>
    }
}

/*
class Nav extends HTMLElement {
    constructor(){
        super();

    
        //Creación de variables para crear etiquetas de HTML
    
        
        this.spanContainHome= document.createElement("span");
        this.imageHome= document.createElement("img");

        this.spanContainRegistro= document.createElement("span");
        this.imageRegistro= document.createElement("img");

        this.spanContainNuevo= document.createElement("span");
        this.imageNuevo= document.createElement("img");

        this.spanContainMas= document.createElement("span");
        this.imageMas= document.createElement("img");

        this.spanContainAyuda= document.createElement("span");
        this.imageAyuda= document.createElement("img");

        this.spanContainSalir= document.createElement("span");
        this.imageSalir= document.createElement("img");
        
        
        // Para agregar a todos deberamos agregarlo a globalContainer
        this.globalContainer.appendChild(this.spanContainHome)
        this.spanContainHome.appendChild(this.imageHome)

        this.globalContainer.appendChild(this.spanContainRegistro)
        this.spanContainRegistro.appendChild(this.imageRegistro)

        this.globalContainer.appendChild(this.spanContainNuevo)
        this.spanContainNuevo.appendChild(this.imageNuevo)

        this.globalContainer.appendChild(this.spanContainMas)
        this.spanContainMas.appendChild(this.imageMas)

        this.globalContainer.appendChild(this.spanContainAyuda)
        this.spanContainAyuda.appendChild(this.imageAyuda)

        this.globalContainer.appendChild(this.spanContainSalir)
        this.spanContainSalir.appendChild(this.imageSalir)

        //Se agregará a shadow las etiquetas pertenecientes al mismo
        this.shadow.appendChild(this.globalContainer)
    }
    connectedCallback(){
        this.globalContainer.innerHTML+= "<p> Hola Mundo </p>"  
        this.imageHome.src= "../../image/ci_house-03.png"
        this.imageRegistro.src= "../../image/ci_file-document.png"
        this.imageNuevo.src= "../../image/ci_cloud-add.png"
        this.imageMas.src= "../../image/ci_note-edit.png"
        this.imageAyuda.src= "../../image/ci_arrows-reload-01.png"
        this.imageSalir.src= "../../image/ci_arrow-undo-up-right.png"
        
        this.imageHome.style.cssText=`
            width: 40px`;
        this.imageRegistro.style.cssText=`
            width: 40px`;
        this.imageNuevo.style.cssText=`
            width: 40px`;
        this.imageMas.style.cssText=`
            width: 40px`;
        this.imageAyuda.style.cssText=`
            width: 40px`;
        this.imageSalir.style.cssText=`
            width: 40px`;
        this.globalContainer.style.cssText= 
            `background-color: #DFD71C ;
            display: flex;
            align-items: center;
        `

            
    }

}
// El primer parametro es el nombre de la etiqueta(Web Component), el segundo parametro es la clase
customElements.define("nav-menu", Nav);
*/
export default Nav;