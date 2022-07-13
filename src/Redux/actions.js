import {TYPE} from './types';

export default{
    //Product actions
    getApiProducts: (payload)=>({
        type: TYPE.SAGA_GET_PRODUCTS,
        payload
    }),

    setProducts: (payload)=>({
        type:TYPE.SET_PRODUCTS,
        payload
    }),

    //Categories actions
    getApiCategories: (payload)=>({
        type: TYPE.SAGA_GET_CATEGORIES,
        payload,
    }),

    setCategories: (payload)=>({
        type:TYPE.SET_CATEGORIES,
        payload,
    })
};