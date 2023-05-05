import './Header.css';
import imgjorgeproyecto from '../img/imgjorgeproyecto-removebg-preview.png'

const Header=()=>{
    return(
        <header className='Header'>
            <div className='Fila'>
            <div className='Img1'>
            </div>
            <div className='Col'>
              <h1>Hey, I am</h1>
              <p className='H1'>George</p>  
            </div>
            <nav className='Nav'>
              <a href='#'>UI UX Designer</a>
              <a href='#'>WordPress Developer</a>
              <a href='#'>App Development</a>

            </nav>
            </div>
            <img src={imgjorgeproyecto}/>
        </header>
    )
}

export default Header