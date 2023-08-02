import "./style.css"

function Nav (){
    //vamos a declarar una variable que se va a encargar de saber si está logeado o no el usuario
    let estatusSesion = localStorage.getItem("estatusSesion");
    //En el return solamente vamos a retornar lo que es HTML y algunas variables
    console.log(estatusSesion);
    //Con la siguiente linea de codigo se asigna un valor, y la estructura es: el primer atributo es la key y el segundo es el valor, siempre que queramos acceder al valor o remover vamos a ocupar la key
    //localStorage.setItem("estatusSesion", "Exitoso")

    localStorage.removeItem("estatusSesion")
    if(estatusSesion === "Exitoso"){
        return<h1>Esta logeado</h1>
    }else{
        return <div className="nav-global">
            <h1 className="nav-titulo">Cereales Maria del Angel</h1>
        </div>
    }
}


export default Nav;