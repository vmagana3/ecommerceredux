import { TYPE } from '../types';
import {takeLatest, put, take, all} from 'redux-saga/effects';
import getProducts from './getProducts';
import getCategories from './getCategories';

function* GetProductList(){
    yield takeLatest(TYPE.SAGA_GET_PRODUCTS, getProducts)   
}

function* GetCategoriesList(){
    yield takeLatest(TYPE.SAGA_GET_CATEGORIES, getCategories);
}

export default function* rootSaga(){
    yield all([
        GetProductList(),
        GetCategoriesList(),
    ])
}
