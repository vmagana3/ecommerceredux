import {call, put} from 'redux-saga/effects';
import actions from '../actions';
import { getProducts } from '../../utils/const/API';

export default function* handleGetProducts(payload){
    try{
        const data = yield call(getProducts);
        if(data){           
            data.forEach((product)=>product.price = Math.trunc(product.price));        
            yield put(actions.setProducts(data));         
        }
    }catch(e){
        console.log("Error al obtener los produtos",e.message);
    }
}
