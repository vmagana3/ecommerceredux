//Redux hooks
import { useSelector } from 'react-redux';

//Components
import ProductCard from './ProductCard';

export default function BestProducts(){
    const products = useSelector((state)=> state.products.slice(0,4));


    return(   
        <div className='w-100 d-flex flex-column'>
            <h4 className='w-100'>Best products</h4>
            <div className='w-100 d-flex justify-content-around'>
                {products.length ? products.map((item, index)=>(
                    <ProductCard
                        key={index}
                        title={item.title}  
                        price={item.price}
                        description={item.description}
                        image={item.image}         
                    />
                )) : null}
            </div>            
        </div> 
    );
};
