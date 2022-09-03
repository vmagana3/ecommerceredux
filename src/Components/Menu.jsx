import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {FcPaid, FcShop} from 'react-icons/fc';
import SearchList from './SharedComponents/SearchList';
import { Link } from "react-router-dom";
import { getCartTotal } from '../utils/Helpers/helpers';
import {useLocation} from 'react-router-dom';

export default function Menu(){

    const categories = useSelector((state)=>state.categories);
    const products = useSelector((state)=>state.products);
    const cartLength = useSelector((state)=>state.cartTotalProducts);
    const cart = useSelector((state)=>state.cart);
    const {pathname} = useLocation();

    const [state, setState] = useState({
        allProducts:[],
        listToShow:[],
    });

    const searchProducts = (e)=>{
        const {value} = e.target;
        if(value){
            const findedProducts = [];
            state.allProducts.forEach((product)=>{
                if(product.title.toLowerCase().includes(value)){
                    findedProducts.push(product);
                }            
            });
            setState({
                ...state,
                listToShow: findedProducts,
            });
        }else{
            setState({
                ...state,
                listToShow: [],
            });            
        }
    }

    useEffect(() => {
        setState({
            ...state,
            allProducts: products,
        });
    }, [products]);

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark row m-0">                

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand col-lg-1 d-flex flex-column align-items-center" to={'/ecommerceredux'}>
                    My Store
                    <FcShop size={50}/>
                </Link>

                <div className="collapse navbar-collapse col-lg-11" id="navbarSupportedContent">

                    {pathname.includes('products') ? null : (
                        <ul className="navbar-nav mr-auto col-lg-2" >                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/ecommerceredux" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categories.length ? categories.map((item, index)=>(
                                       <Link className="dropdown-item" to={`/ecommerceredux/products/${item.replace(/ /g, "")}`} key={index}>{item.toUpperCase()}</Link>
                                )) : <a className="dropdown-item" href="#">Loading categories . . .</a>}                                                                                                                            
                            </div>
                        </li>                        
                    </ul>
                    )}                    
                    
                    <div className='col-lg-9'>
                        <SearchList
                            items = {state.listToShow} 
                            searchProducts = {searchProducts}                       
                        />                        
                    </div>                       

                    <div className='col-lg-1 d-flex justify-content-center'>
                        <Link to={'ecommerceredux/cart'} className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='badge badge-pill badge-warning'>{cartLength}</div>              
                            <FcPaid size={35} title="shopingcart"/>                                          
                            <span className='text-light font-weight-bold'>${getCartTotal(cart)}</span>
                        </Link>                                                
                    </div>                
                </div>
            </nav>
        </>
    );
};
