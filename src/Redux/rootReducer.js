import {TYPE} from './types';

const INITIAL_STATE = {
    products:[],
    loadingProducts:false,

    findedProducts:[],

    categories:[],
    loadingCategories:false,

    cart:[],

};

const globalState = (state = INITIAL_STATE, {type, payload})=>{
    switch(type){
        case TYPE.SAGA_GET_PRODUCTS:
            return{
                ...state,
                loadingProducts: true,                                
            };

        case TYPE.SET_PRODUCTS:
            return{
                ...state,
                products: payload,
                loadingProducts: false,                
            }

        case TYPE.SET_FINDED_PRODUCTS:
            return{
                ...state,
                findedProducts:payload

            }

        case TYPE.SAGA_GET_CATEGORIES:
            return{
                ...state,
                loadingCategories: true,                               
            }

        case TYPE.SET_CATEGORIES:
            return{
                ...state,
                categories:payload, 
                loadingCategories: false
            }
        case TYPE.ADD_CART_ITEM:
            return{
                ...state,
                cart: payload
            }
        default:
            return{
                ...state
            }
    }
};

export default globalState;


