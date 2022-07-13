import {constAPI} from './Endpoints';

async function getProducts(){
    const response = await fetch(`${constAPI.urlBaseApi}/products`);
    const data = await response.json();
    return data;
};

async function getCategories(){
    console.log(`${constAPI.urlBaseApi}/categories`)
    const response = await fetch(`${constAPI.urlBaseApi}/products/categories`);
    const data = await response.json();
    return data;
}

export{
    getProducts,
    getCategories
};