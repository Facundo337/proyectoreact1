import Nav from '../../components/navegacion/nav'
import './contact.css'

function Contact (){
    return(
        <div>
            <Nav/>
        <main className='contenedor-contacto'>      
            <section className='contenedor-contacto2'>
                <div className='texto'>
                 <h2>Contact</h2>
                 <p>Leave us your information so we can contact you</p>
                </div>
         
            <form className="row g-3" action='' method='post'>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control input-em" id="name" name='name'/>
                </div>
                <div className="col-md-6">
                    <label hmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control input-em" id="email" name='email'/>
                </div>
                <div className="col-md-12">
                    <label hmlFor="messege" className="form-label">Messege</label>
                    <textarea id='messege' name='messege' className='areatexto w-100'></textarea>
                </div>
                <div className="col-12">
                    <input type="submit" className="btn btn-send" value='Send'/>
                </div>
            </form>
            </section>
        </main>     
        </div>
    )
}

export default Contact;