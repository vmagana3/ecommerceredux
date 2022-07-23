
const orderProducts = (orderBy, productsArray)=>{    
    if(orderBy === 'pricecheap'){
        return productsArray.sort((a, b)=>{
            if(a.price < b.price) {               
                return -1;
              }
              if(a.price > b.price) {
                return 1;
              }
              return 0;            
        });
    }

    if(orderBy === 'priceexpensive'){
        return productsArray.sort((a, b)=>{
            if(a.price < b.price) {               
                return 1;
              }
              if(a.price > b.price) {
                return -1;
              }
              return 0;            
        });
    }

    if(orderBy === 'rating'){
        return productsArray.sort((a, b)=>{
            if(a.rating.rate < b.rating.rate) {
                return 1;
              }
              if(a.rating.rate > b.rating.rate) {                
                return -1;
              }
              return 0;            
        });
    }
};

const getCartTotal = (cart)=>{
  let total = 0;
  cart.forEach((product)=>{
    total = total + (product.price*product.qantity);
  });
  return total;
}

const getCartTotalEnvio = (cart)=>{
  let total = 0;
  cart.forEach((product)=>{
    total = total + (product.price*product.qantity);
  });
  return total + 99;
}

export{
    orderProducts,
    getCartTotal,
    getCartTotalEnvio
}