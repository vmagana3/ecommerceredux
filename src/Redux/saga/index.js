import { TYPE } from '../types';
import {takeLatest, takeEvery,put, take, all} from 'redux-saga/effects';
import getProducts from './getProducts';
import getCategories from './getCategories';
import cartLengthChange from './changeCartLength';


function* GetProductList(){
    yield takeLatest(TYPE.SAGA_GET_PRODUCTS, getProducts);   
}

function* GetCategoriesList(){
    yield takeLatest(TYPE.SAGA_GET_CATEGORIES, getCategories);
}

function* changeCartLength(){
    yield takeEvery(TYPE.ADD_CART_ITEM, cartLengthChange);
}

export default function* rootSaga(){
    yield all([
        GetProductList(),
        GetCategoriesList(),
        changeCartLength(),
    ])
}
