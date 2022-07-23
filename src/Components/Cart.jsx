import { useSelector } from "react-redux";
import {getCartTotal, getCartTotalEnvio} from '../utils/Helpers/helpers';
import { useEffect, useState } from "react";
import NoProductsCart from "./SharedComponents/NoProductsCart";

export default function Cart(){

    const cart = useSelector((state)=>state.cart);
    const totalProductsCart = useSelector((state)=>state.cartTotalProducts);

    

    const [state, setState] = useState({
        cart:[],
        totalProducts:0,
        finalTotal: 0
    });

    useEffect(()=>{
        setState({
            ...state,
            totalProducts:getCartTotal(cart),
            finalTotal:getCartTotalEnvio(cart),
        })
    },[totalProductsCart])

    return(
        <div className="d-flex flex-column mt-5 mb-5">
            {!cart.length ? (
                <NoProductsCart/>
            ):(
                <div>
                    <div className="w-100 p-5">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Qantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product, index)=>(
                                    <tr key={index}>
                                        <td>{product.title}</td>
                                        <td>
                                            <div className="w-100 d-flex justify-content-around align-items-center">
                                                <button className="btn">-</button>
                                                <p className="h5 m-0">{product.qantity}</p>
                                                <button className="btn">+</button>
                                            </div>                                            
                                        </td>
                                        <td>${product.price}</td>
                                        <td>${product.price * product.qantity}</td>
                                    </tr>
                                ))}                                                                     
                            </tbody>
                        </table>                
                    </div>

                    <div className="w-100 p-5 d-flex justify-content-between align-items-center mb-5">
                        <div className="w-50 d-flex justify-content-center align-items-center">
                            <h3>{`Tienes ${totalProductsCart} productos en tu carrito`}</h3>
                        </div>
                        <div className="w-50 d-flex flex-column p-3">
                            <div className="d-flex justify-content-between">
                                <p>Total de productos:</p>
                                <p>${state.totalProducts}</p>
                            </div>
                            <div className="d-flex justify-content-between border border-top-0 border-left-0 border-right-0 mb-1">
                                <p>Envío:</p>
                                <p>$99.00</p>                    
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Total:</p>
                                <p>${state.finalTotal}</p>                    
                            </div>  
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-success w-25">Next Step</button>                        
                            </div>                    
                        </div>
                    </div>
                </div>                
            )}
        </div>
    );
};
