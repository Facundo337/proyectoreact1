import Nav from '../../components/navegacion/nav'
import Card from '../../components/cards/card'
import Filter from '../../components/Filter/filter'

import {useState, useEffect} from 'react';

import './characters.css'

function Characters (){

    let [filtros]=useState([{nombre:'Alive',
                            filtro:'Character Alive'},

                            {nombre:'Dead',
                             filtro:'Character Dead'},

                            {nombre:'Female',
                             filtro:'Female'}, 

                            {nombre:'Male',
                             filtro:'Male'}, 

                            {nombre:'unknown',
                             filtro:'Origin Unknown'}])
    let [listaCompleta, setListaCompleta]=useState([])
    let [personajes,setPersonajes]=useState([]);
    let [filtrosAplicados,setFiltrosAplicados]=useState([]);
    

    let traerPersonajes=async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch( err=>console.log("Hubo un error: "+err));

        return dato
    }

    
    useEffect(()=>{
        let guardarPersonajes=async()=>{
            let info =await traerPersonajes();
            console.log(info)
           let listaPersonajes=info.results;
           setPersonajes(listaPersonajes)
           setListaCompleta(listaPersonajes)

        }

        guardarPersonajes()},[])

    let filtrar=(nombreCheckbox)=>{
        if(nombreCheckbox === "Alive" || nombreCheckbox === "Dead"){
            let resultado=personajes.filter((personaje)=>personaje.status === nombreCheckbox)
        setPersonajes(resultado)}
        if(nombreCheckbox === "Female" || nombreCheckbox === "Male"){
            let resultado=personajes.filter((personaje)=>personaje.gender === nombreCheckbox)
        setPersonajes(resultado)}
        if(nombreCheckbox === "unknown"){
            let resultado=personajes.filter((personaje)=>personaje.origin.name === nombreCheckbox)
        setPersonajes(resultado)}
    }    

       
    let aplicarFiltros=(event)=>{
        let nombreCheckbox=event.target.id

        if(event.target.checked===true){
            console.log('aplicar filtros')
            setFiltrosAplicados([...filtrosAplicados,nombreCheckbox]);
            //console.log(personajes)
            

            

        } else{
        console.log('sacar filtros')
        
        let filtrosRestantes=filtrosAplicados.filter((el)=>el !== nombreCheckbox)
        setFiltrosAplicados(filtrosRestantes)
        
        
        setPersonajes(listaCompleta)}
    
    }
    console.log(filtrosAplicados)
    useEffect(()=>{filtrosAplicados.forEach((filtro)=>{filtrar(filtro)})},[filtrosAplicados])
   
    const [filter,setFilter]=useState(false)
    
    const showFilter=()=>{
        setFilter(true)
    }
    const unShowFilter=()=>{
        setFilter(false)
    }


    return(
        <div className='cont-carac'>
            <Nav/>
            <section className='contenedor-filtros'>
                <div className='filtros-nav'>
                    <h2 className='nombre1'>Filters</h2>
                    <i class="btn-filtros bi bi-filter" onClick={filter ? unShowFilter : showFilter}></i>
                </div>
            </section>
            <section className={filter ? 'filtros-res':'filtros'}>
             {filtros.map((item)=>{
                return <Filter key={item.nombre} valorFiltro={item.filtro} valorId={item.nombre}
                handlerChange={aplicarFiltros}/>})}
             </section>   
            
            <section className='contendorcard'>
                {personajes.length>0?
                personajes.map((personaje)=>{
                return <Card key={personaje.id} data={personaje}/>
                }):
                <div className='alert'>
                    <i class="ic-adv bi bi-exclamation-triangle-fill"></i>
                    <p className='cartel-adv'>Sorry! There are no characters width all those properties</p>
                </div>
                
                }
                
            </section>
            
        </div>
    )
}












export default Characters;