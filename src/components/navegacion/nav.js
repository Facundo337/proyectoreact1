import './nav.css'
import { Link } from 'react-router-dom';



function Nav (){

    return(
        <section className='contenedor-nav'>
        <div className='cajanav' >
            <h2 className='navh2'><Link className='btn-RM' to='/'>Rick & Morty</Link></h2>
            <div className='cajanav2'>
                <Link className='btn-N' to="/characters">Characters</Link>
                <Link className='btn-N' to="/contact" >Contact</Link> {/*FALTA HREF EN ETIQUETAS A*/}
            </div>
            
        </div>
        </section>
    )
}

export default Nav;