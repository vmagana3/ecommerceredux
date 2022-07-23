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
    }),

    //setFindedProducts
    setFindedProducts:(payload)=>({
        type:TYPE.SET_FINDED_PRODUCTS,
        payload,
    }),

    //addCartItem
    addCartItem: (payload)=>({
        type:TYPE.ADD_CART_ITEM,
        payload
    }),

    changeCartTotalProducts: (payload)=>({
        type: TYPE.CHNAGE_TOTAL_CART_PRODUCTS,
        payload
    })
};