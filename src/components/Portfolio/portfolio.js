import "./portfolio.css";
import portfolio from '../img/Portfolio.jpg'
import portfolio2 from '../img/Portfolio2.jpg'



const Portfolio=()=>{
    return(
        <div className="Cards">
            <div>
            <h1 className="T1">OUR WORK</h1>
            </div>
            <div>
            <h2 className="T2">PORTFOLIO</h2>
            </div>
            <img className='Fondo' src={portfolio}/>
            <img className='Fondo' src={portfolio2}/>
        </div>
    
    )
};

export default Portfolio;