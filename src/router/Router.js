import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from '../pages/home/home'
import Characters from '../pages/characters/characters'
import Contact from '../pages/contact/contact'

function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/contact' element={<Contact/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router;