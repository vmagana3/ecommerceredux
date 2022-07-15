const orderProducts = (orderBy, productsArray)=>{    
    if(orderBy === 'pricecheap'){
        console.log("pricecheap");
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
        console.log("priceexpensive");
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
        console.log("rating");
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
}

export{
    orderProducts,
}