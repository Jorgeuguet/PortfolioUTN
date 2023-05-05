import { React } from "react";
import "./Navbar.css";



const Navbar=()=>{
    return(
        <div className="Navbar">
            <span className="Nombre">GEORGE</span>
            <div className="NavItems">
            <a href='Home'>Home</a>
            <a href='Portfolio'>Portfolio</a>
            <a href='Service'>service</a>
            <a href='About'>About</a>
            <a href='Contact'>Contact</a>
            </div>

            <div className='Redes'>
                <a href=''className="Fa"><i class="fa-brands fa-facebook-f"></i></a>
                <a href=''className="In"><i class="fa-brands fa-instagram"></i></a>
                <a href=''className="Tw"><i class="fa-brands fa-twitter"></i></a>
                <a href=''><i class="fa-brands fa-behance"></i></a>
            </div>
        </div>
    )
}

export default Navbar