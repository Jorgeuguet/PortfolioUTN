import './Footer.css';
import Logo from '../img/logo pagina.jpg'

const Footer=()=>{
    return(
        <section>
        <div className='Footer'>
            <box className="box">
                <figure className='Figure'>
                    <a href="#">
                        <img src={Logo}/>
                    </a>
                </figure>
            </box>
            <box className="box">
                <h1>SOBRE NOSOTROS</h1>
                <p>jorgeuguet@gmail.com</p>
                <p>3756-407640</p>
                <p>@YORCHUGUET</p>
            </box>
            <box className="box">
                <div className='Redes'>
                <h2>SIGUENOS</h2>
                <a href=''className="Fa"><i class="fa-brands fa-facebook-f"></i></a>
                <a href=''className="In"><i class="fa-brands fa-instagram"></i></a>
                <a href=''className="Tw"><i class="fa-brands fa-twitter"></i></a>
                <a href=''><i class="fa-brands fa-behance"></i></a>
            </div>
            </box>

        </div>
        
            <div className="SMALL" >
                <small>&copy; 2023 <d>GEORGE</d>- Todos los Derechos Reservados</small>
            </div>
        </section>
    )
}


export default Footer