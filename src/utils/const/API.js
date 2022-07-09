import {constAPI} from './Endpoints';

async function getProducts(){
    console.log(constAPI.urlBaseApi);
    const response = await fetch(`${constAPI.urlBaseApi}/products`);
    const data = await response.json();
    return data;
}

export{
    getProducts
};