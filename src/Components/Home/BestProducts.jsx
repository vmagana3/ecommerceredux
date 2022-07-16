import { useState } from 'react';
//Redux hooks
import { useSelector } from 'react-redux';

//Icons
import {FaArrowRight} from 'react-icons/fa';

//Components
import ProductCard from '../SharedComponents/ProductCard';
import Spinner from '../SharedComponents/Spinner';
import DetailsModal from '../SharedComponents/DetailsModal';

export default function BestProducts(){

    const products = useSelector((state)=> state.products.slice(0,6));
    const loadingProducts = useSelector((state)=>state.loadingProducts);

    const [state, setState] = useState({
        showModal: false,
        selectedProduct:{},
    });

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
                                    image={item.image} 
                                    rate={item.rating.rate}
                                    description={item.description} 
                                    cardClicked = {()=>{                                        
                                        setState({
                                            showModal: true,
                                            selectedProduct:item
                                        })
                                    }}                                          
                                />
                            )) : null}
                        </div>
                    )
            }     

            {state.showModal ? (
                <DetailsModal                    
                    selectedProduct = {state.selectedProduct}  
                    closeModal = {()=>{
                        setState({
                            showModal:false,
                            selectedProduct:{}
                        })
                    }}                
                />
            ): null}  

            <div className='w-50 d-flex align-self-center justify-content-center align-items-center mb-5'>
                <a href='/products/all' className=' h1 text-center font-weight-light mb-5'>See All Products</a>                  
                <FaArrowRight size={40} className="ml-3 mb-5"/>
            </div>

        </div> 
    );
};
