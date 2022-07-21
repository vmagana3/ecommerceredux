import {FaPlus} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {modifyCart} from '../../utils/Helpers/helpers';
import actions from '../../Redux/actions';
import { useEffect, useState } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

export default function ProductCard({productKey, title, price, image, cardClicked}){

    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    const [state,setState] = useState({
        currentCart:[]
    });

    const addToCart = ()=>{   

        const thisContextCart = state.currentCart;

        const newItem = {
            productId: productKey,
            title,
            price,
            qantity:1
        };

        if(!thisContextCart.length){
            thisContextCart.push(newItem);            
            dispatch(actions.addCartItem(thisContextCart));
            return null;
        }else{
            const productIds = [];
            thisContextCart.forEach((item)=> productIds.push(item.productId));
            if(productIds.includes(newItem.productId)){
                thisContextCart.forEach((item)=>{
                    if(item.productId === newItem.productId){
                        item.qantity = item.qantity + newItem.qantity;
                        dispatch(actions.addCartItem(thisContextCart));
                    }
                })
            }else{
                thisContextCart.push(newItem);
                dispatch(actions.addCartItem(thisContextCart));
            }
        }
    };

    useEffect(()=>{
        setState({
            currentCart: cart
        })
    },[cart])

    return(
        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
            <div className="w-25 h-50 d-flex justify-content-center align-items-center">
                <img className="card-img-top" src={image} alt="Card image cap"style={{cursor:'pointer'}}  onClick={cardClicked}/>
            </div>            
            <div className="card-body h-50 d-flex flex-column justify-content-around align-items-center">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text">$ {price}</p>            
                <button className="btn btn-primary d-flex justify-content-around align-items-center" onClick={addToCart}>
                    Add to cart 
                    <FaPlus className='ml-2'/>
                </button>
            </div>                       
        </div>
    );
};

