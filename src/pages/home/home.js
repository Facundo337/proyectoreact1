import './home.css'
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className='caja'>
            <div className='caja1'>
                <h1 className='titulo-home'>Proyect Rick & Morty</h1>
                <h2>Helcome to Rick & Morty Proyect!</h2>
                <p className='p1'>This proyect was made for practising React and to made a functional website</p>
                <p>In this website you can know information of the characters of this animated series.</p>
                <p>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h2 className='lg'>Lets go!</h2>
                <ul>
                    <li className='btn1'><Link class="btnh" to='/characters'>Characters</Link></li>
                    <li className='btn2'><Link class="btnh btnh-C" to='/contact'>Contact</Link></li>

                </ul>
            </div>
        </div>
    )
    
}

export default Home;