//Redux hooks
import { useSelector } from 'react-redux';

//Components
import ProductCard from './ProductCard';
import Spinner from '../Spinner';

export default function BestProducts(){
    const products = useSelector((state)=> state.products.slice(0,6));
    const loadingProducts = useSelector((state)=>state.loadingProducts);

    return(   
        <div className='w-100 d-flex flex-column mt-5 mb-5'>            
            <h1 className='w-100 display-4'>Our Best products</h1>
            {
                loadingProducts ? (
                    <div className='w-100'>
                        <Spinner></Spinner>
                    </div>
                ) : (
                        <div className='w-100 row m-0'>
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
                    )
            }                        
        </div> 
    );
};
