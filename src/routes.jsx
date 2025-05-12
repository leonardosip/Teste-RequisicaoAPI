import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Usuario from './pages/Usuario'
import Header from './components/Header'
import Erro from './pages/Erro'


function RoutesApp(){

    return(
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path='/usuario/:id' element={<Usuario/>}/>


            <Route path='*' element={<Erro/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp;