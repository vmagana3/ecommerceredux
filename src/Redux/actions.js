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
    getApiProducts: (payload)=>({
        type: TYPE.SAGA_GET_PRODUCTS,
        payload,
    }),

    setCategores: (payload)=>({
        type:TYPE.SAGA_GET_PRODUCTS,
        payload,
    })
};