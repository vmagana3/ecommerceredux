import {call, put} from 'redux-saga/effects';
import actions from '../actions';
import { getCategories } from '../../utils/const/API';

export default function* handleGetCategories(payload){
    try{
        const data = yield call(getCategories);
        if(data){
            yield put(actions.setCategories(data));         
        }
    }catch(e){
        console.log("Error al obtener los produtos",e.message);
    }
}
