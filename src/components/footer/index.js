import "./style.css"
import home from '../../Image/ci_house-03.png' 
import LOGO from '../../Image/LOGO MADEA.png'



function Footer (){

    return<div className="footer-global">
            <span className="contenedor-contactos">
                <img className= "imagen-general" src={home} alt= "regresar a home"/>
                <h3 className="dir text-footer">DIRECCION GRANJAS SAN ANTONIO</h3>
            </span>
            <span className="contenedor-contactos">
                <img className= "imagen-general" src={LOGO} alt= "registrarse"/>
                <a className= "text-footer"href="mailto:mariadelangelcereales@hotmail.com?subject=contacto para posible compra">Click para mandar correo</a> 
                <h3 className="correo text-footer">mariadelangelcereales@hotmail.com</h3>
            </span> 
        </div>

}

export default Footer;