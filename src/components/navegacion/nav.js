import { useState } from 'react';
import './nav.css'
import { Link } from 'react-router-dom';



 function Nav (){

    const [menu,setMenu]=useState(false)

    const showMenu=()=>{
        setMenu(true)
    }
    const unshowMenu=()=>{
        setMenu(false)
    }

    return(
        <section className='contenedor-nav'>
        <div className='cajanav' >
            <div className='cajanav1'>
                <h2 className='navh2'><Link className='btn-RM' to='/'>Rick & Morty</Link></h2>
                <i class="btn-hamb bi bi-list" onClick={menu ? unshowMenu : showMenu}></i>
            </div>
            <div className={menu ? 'cajanav2-res' : 'cajanav2'}>
                <ul className='btns'>
                    <li><Link className='btn-N' to="/characters">Characters</Link></li>
                    <li><Link className='btn-N' to="/contact" >Contact</Link></li>
                </ul>
            </div>
            
            
        </div>
        </section>
    )
}

export default Nav;