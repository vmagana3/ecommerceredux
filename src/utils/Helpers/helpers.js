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

/* const modifyCart = (currentCart, productId, productName, productPrice, productQantity)=>{
  const cartModified = [];

  const newItem = {
    productId,
    productName,
    productPrice,
    productQantity
  };

  cartModified.push(newItem);
  return cartModified;
} */

export{
    orderProducts,
}