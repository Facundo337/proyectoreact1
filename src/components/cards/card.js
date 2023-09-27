import './card.css'

import { useState } from 'react';

import InfoCards from '../infocards/infocards'

function Card ({data}){

    const [cardOpen,setCardOpen]= useState("div-card")

    const show=()=>{
        setCardOpen("div-card-open")
    }

    const closeShow=()=>{
        setCardOpen("div-card")
    }



    return(
        <div className={cardOpen}>
                <img className="imagen-personaje"src={data.image} alt='imagen-personaje'></img>
                <h3 className="nombre">{data.name}</h3>
                <button className='btnKM' onClick={show}>Know More..</button>
                <button className="btnX" onClick={closeShow}>X</button>
                {cardOpen === "div-card-open" ? <InfoCards estatus={data.status} genero={data.gender} especie={data.species} origen={data.origin.name}/>:''}
        </div>
    )
}


export default Card;