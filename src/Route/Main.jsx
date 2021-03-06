import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';

//React router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Action creator
import actions from '../Redux/actions';

//Components
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import Home from '../Views/Home';
import Cart from '../Components/Cart';
import Products from '../Components/Products/Products';

export default function Main(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.getApiProducts());
        dispatch(actions.getApiCategories());
    },[]);

    return(
        <div>
            <Menu/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route> 
                    <Route path='/products/:category' element={<Products/>}></Route>                    
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>        
    );
};
