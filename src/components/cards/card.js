import './card.css'

import { useState } from 'react';

import InfoCards from '../infocards/infocards'

function Card ({data}){

    const [show,setShow]= useState(false)

    return(
        <div className='divcard card'>
            <img src={data.image} alt='imagen-personaje'></img>
            <h3>{data.name}</h3>
            <button className={show?"d-none":"d-block"} onClick={()=> setShow(true)}>Know More..</button>
           {show === true? <InfoCards estatus={data.status} genero={data.gender} especie={data.species} origen={data.origin.name} setShow={setShow}/>:''}
        </div>
    )
}


export default Card;