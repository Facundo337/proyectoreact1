import './nav.css'



function Nav (){

    return(
        <div className='cajanav' >
            <h2 className='navh2'>Rick & Morty</h2>
            <div className='cajanav2'>
                <a href='#characters'>Characters</a>
                <a href='#contact' >Contact</a> {/*FALTA HREF EN ETIQUETAS A*/}
            </div>
            
        </div>
    )
}

export default Nav;