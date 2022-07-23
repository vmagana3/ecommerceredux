import { useSelector } from "react-redux";
import {getCartTotal, getCartTotalEnvio} from '../utils/Helpers/helpers';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import NoProductsCart from "./SharedComponents/NoProductsCart";
import {FaTrashAlt} from 'react-icons/fa';
import actions from "../Redux/actions";

export default function Cart(){

    const cart = useSelector((state)=>state.cart);
    const totalProductsCart = useSelector((state)=>state.cartTotalProducts);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        cart:[],
        totalProducts:0,
        finalTotal: 0
    });

    const deleteCartProduct = (id)=>{
        const updatedCart = state.cart.filter((product)=> product.productId !== id)
        dispatch(actions.addCartItem(updatedCart));
    }

    const updateProductQantity = (id, qantityVariable)=>{
        state.cart.forEach((product)=>{
            if(product.productId === id){
                product.qantity = product.qantity + qantityVariable
            }
        });
        dispatch(actions.addCartItem(state.cart));
    }

    useEffect(()=>{
        setState({
            ...state,
            cart:cart,
            totalProducts:getCartTotal(cart),
            finalTotal:getCartTotalEnvio(cart),
        })
    },[totalProductsCart])

    return(
        <div className="d-flex flex-column mt-5 mb-5">
            {!state.cart.length ? (
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
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.cart.map((product, index)=>(
                                    <tr key={index} id={product.productId}>
                                        <td>{product.title}</td>
                                        <td>
                                            <div className="w-100 d-flex justify-content-around align-items-center">
                                                <button disabled={product.qantity <= 1 ? true : false} className="btn" onClick={()=>updateProductQantity(product.productId, -1)}>-</button>
                                                <p className="h5 m-0">{product.qantity}</p>
                                                <button className="btn"  onClick={()=>updateProductQantity(product.productId, 1)}>+</button>
                                            </div>                                            
                                        </td>
                                        <td className="text-center">${product.price}</td>
                                        <td className="text-center">${product.price * product.qantity}</td>
                                        <td>
                                            <button className="btn btn-sm btn-danger" onClick={()=>deleteCartProduct(product.productId)}>
                                                <FaTrashAlt/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}                                                                     
                            </tbody>
                        </table>                
                    </div>

                    <div className="w-100 p-5 d-flex justify-content-between align-items-center mb-5">
                        <div className="w-50 d-flex justify-content-center align-items-center">
                            <h3 className="font-weight-light">{`Total products in cart: ${totalProductsCart}`}</h3>
                        </div>
                        <div className="w-50 d-flex flex-column p-3">
                            <div className="d-flex justify-content-between">
                                <p className="font-weight-bold">Total de productos:</p>
                                <p>${state.totalProducts}</p>
                            </div>
                            <div className="d-flex justify-content-between border border-top-0 border-left-0 border-right-0 mb-1">
                                <p className="font-weight-bold">Envío:</p>
                                <p>$99.00</p>                    
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="font-weight-bold">Total:</p>
                                <p>${state.finalTotal}</p>                    
                            </div>  
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-success w-25">Pay</button>                        
                            </div>                    
                        </div>
                    </div>
                </div>                
            )}
        </div>
    );
};
