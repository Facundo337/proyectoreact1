import './infocards.css'

function InfoCards({estatus,origen,genero,especie,setShow}){
    return(
       <div className='cajainfocards'>
            <button onClick={()=> setShow(false)}>X</button>
             <ul>
                <li>
                    <h4>Character status</h4>
                    <p>{estatus}</p>
                </li>
                <li>
                    <h4>Species</h4>
                    <p>{especie}</p>
                </li>
                <li>
                    <h4>Origin</h4>
                    <p>{origen}</p>
                </li>
                <li>
                    <h4>Gender</h4>
                    <p>{genero}</p>
                </li>
            </ul>
        </div>
       
    )
}

export default InfoCards;