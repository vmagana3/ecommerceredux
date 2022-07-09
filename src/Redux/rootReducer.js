import {TYPE} from './types';

const INITIAL_STATE = {
    products:[],
    loadingProducts:false,

    categories:[],
    loadingCategories:false,

};

const globalState = (state = INITIAL_STATE, {type, payload})=>{
    switch(type){
        case TYPE.SAGA_GET_PRODUCTS:
            return{
                ...state,
                loadingProducts: true,
                products: payload,                
            };

        case TYPE.SET_PRODUCTS:
            return{
                ...state,
                loadingProducts: false
            }

        case TYPE.SAGA_GET_CATEGORIES:
            return{
                ...state,
                loadingCategories: true,
                categories:payload,                
            }

        case TYPE.SET_CATEGORIES:
            return{
                ...state,
                loadingCategories: false
            }
    }
};

export default globalState;


