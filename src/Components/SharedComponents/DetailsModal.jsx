import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux';
import actions from "../../Redux/actions";
import Swal from 'sweetalert2';

export default function DetailsModal({ selectedProduct, closeModal}){

    const {id, title, price, description, image } = selectedProduct;
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const [state, setState] = useState({
        counter:1,
        currentCart:[]
    });

    const addToCart = ()=>{   

        const thisContextCart = state.currentCart;
        
        const newItem = {
            productId: id,
            title,
            price,
            qantity:state.counter
        };


        if(!thisContextCart.length){
            thisContextCart.push(newItem);            
            dispatch(actions.addCartItem(thisContextCart));
            Toast.fire({
                icon: 'success',
                title: 'Product added to cart'
            });
            return null;
        }else{
            const productIds = [];
            thisContextCart.forEach((item)=> productIds.push(item.productId));
            if(productIds.includes(newItem.productId)){
                thisContextCart.forEach((item)=>{
                    if(item.productId === newItem.productId){
                        item.qantity = item.qantity + state.counter;
                        dispatch(actions.addCartItem(thisContextCart));
                        Toast.fire({
                            icon: 'success',
                            title: 'Product added to cart'
                        });
                    }
                })
            }else{
                thisContextCart.push(newItem);
                dispatch(actions.addCartItem(thisContextCart));
                Toast.fire({
                    icon: 'success',
                    title: 'Product added to cart'
                });
            }
        }
        
        closeModal();
    };

    useEffect(()=>{
        setState({
            ...state,
            currentCart: cart
        });
    },[cart])


    return(
        <div className="modal d-block" id="exampleModalCenter" tabIndex="-1" style={{backgroundColor:'rgba(0, 0, 0, 0.3)', overflowY: 'scoll'}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>                
                <div className="modal-body text-dark">
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="w-25" src={image} alt="" />                                                                        
                    </div>
                    <div className="text-center">
                        <p className="h2">{title}</p>
                    </div> 
                    <div className="">
                        <p>{description}</p>                        
                    </div>          
                    <div className="">
                        <p className="font-weight-bold h2">${price}</p>                        
                    </div>                                           
                </div>
                    <div className="modal-footer d-flex justify-content-between">   
                        <div className="d-flex justify-content-between align-items-center w-25">
                            <button className="btn btn-sm btn-info" onClick={()=>setState({
                                    ...state,
                                    counter: state.counter - 1
                                })} 
                                disabled={state.counter <= 1 ? true : false}>
                                <FaMinus
                            />
                            </button>                        
                            <p className="h3">{state.counter}</p>
                            <button className="btn btn-sm btn-info" onClick={()=>setState({
                                    ...state,
                                    counter: state.counter + 1
                                })} >
                                <FaPlus/>
                            </button>                            
                        </div>     
                        <div className="w-50 d-flex justify-content-around">
                            <button type="button" className="btn btn-success d-flex align-items-center" data-dismiss="modal" onClick={addToCart}><FaPlus className="mr-2"/>Add to cart</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>                    
                        </div>                                                           
                    </div>
                </div>
            </div>
    </div>    
    );
};
