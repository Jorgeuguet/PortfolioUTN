import './Amazing.css'
import Ama from '../img/Amaizing.jpg'

const Amazing=()=>{
    return(
        <div className="Amazing">
            <div>
            <h1 className="W">WHAT WE DO</h1>
            </div>
            <div>
            <h2 className="A">Amasing Expertise</h2>
            </div>
            <img className='Ama' src={Ama} />
        </div>


        
    )
}

export default Amazing