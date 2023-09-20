import Nav from '../../components/navegacion/nav'
import Card from '../../components/cards/card'

import {useState, useEffect} from 'react';

import './characters.css'

function Characters (){
   
    let [personajes,setPersonajes]=useState([]);

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
        }
        
        guardarPersonajes()},[])
   
    return(
        <div>
            <Nav/>
            <h2>Filters</h2>
            <p>Aca irian los filtros....</p>
            
            <section>
            {personajes.map((personaje)=>{
                    return <Card key={personaje.id} data={personaje}/>
                })}
            </section>
            
        </div>
    )
}












export default Characters;