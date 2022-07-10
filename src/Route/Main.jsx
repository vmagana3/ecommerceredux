//React router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import Home from '../Views/Home';
import Cart from '../Components/Cart';

export default function Main(){
    return(
        <div>
            <Menu/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>                    
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>        
    );
};
