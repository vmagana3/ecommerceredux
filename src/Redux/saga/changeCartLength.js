import {put} from 'redux-saga/effects';
import actions from '../actions';

export default function* handleChangeCartLength(payload){
    let cartTotalProducts = 0;

    if(payload.payload){
        payload.payload.forEach((product)=>{
            cartTotalProducts = cartTotalProducts + product.qantity
        })
    }
    yield put(actions.changeCartTotalProducts(cartTotalProducts));
}
