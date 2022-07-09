import { TYPE } from '../types';
import {takeLatest, put, take, all} from 'redux-saga/effects';
import getProducts from './getProducts';

function* GetProductList(){
    yield takeLatest(TYPE.SAGA_GET_PRODUCTS, getProducts)
}

export default function* rootSaga(){
    yield all([
        GetProductList(),
    ])
}
