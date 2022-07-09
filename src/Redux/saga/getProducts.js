import {call, put} from 'redux-saga/effects';
import actions from '../actions';
import { getProducts } from '../../utils/const/API';

export default function* handleGetProducts(payload){
    try{
        const data = yield call(getProducts);
        if(data){
            console.log(data);
            console.log("[DEBUG] --> PRODUCTOS OBTENIDOS CORECTAMENTE");
            yield put(actions.setProducts(data));         
        }
    }catch(e){
        console.log("Error al obtener los produtos",e.message);
    }
}