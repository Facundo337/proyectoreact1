import './filter.css'

function Filter({valorFiltro,valorId,handlerChange}){
    return(
     <div className='filt'>
        <div className=" d-flex contenedorsw form-check form-switch">
            <input className="input form-check-input" type="checkbox" role="switch" id={valorId} onChange={handlerChange}/>
            <label className="form-check-label" htmlFor={valorId}>{valorFiltro}</label>
        </div>
     </div>
    
    )
}


export default Filter;