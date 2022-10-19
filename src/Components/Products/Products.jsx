import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import ProductCard from '../SharedComponents/ProductCard';
import FiltersBar from './FiltersBar';
import Spinner from '../SharedComponents/Spinner';
import DetailsModal from '../SharedComponents/DetailsModal';
import { orderProducts } from '../../utils/Helpers/helpers';


export default function Products(){

    const products = useSelector((state)=>state.products);
    const findedProducts = useSelector((state)=>state.findedProducts);
    const {category} = useParams();    

    const [state, setState] = useState({
        list:[],
        filterCategory:'',
        orderProductsBy:'',
        showModal: false,
        selectedProduct:{}
    });

    useEffect(() => {        
        if(category === 'finded'){
            setState({
                ...state,
                list: findedProducts.length ? findedProducts : [],
                filterCategory:category,
            })
        }else{
            setState({
                ...state,
                list: category !== 'all' ? products.filter((product)=> product.category.replace(/ /g, "") === category) : products,
                filterCategory:category,
            });
        }       
    }, [products, findedProducts]);

    const changeCategory = (category)=>{
        setState({
            ...state,
            filterCategory:category,
            list: category !== 'all' ? products.filter((product)=> product.category.replace(/ /g, "") === category) : products,
        })
    };

    const orderProductsList = (orderBy)=>{
        if(orderBy !== 'options'){
            setState({
                ...state,
                list: orderProducts(orderBy, state.list)
            })
        }      
    };

    return(
        <div className='w-100 d-flex flex-column mt-5 mb-5 p-5'>                        
            <FiltersBar
                 setCategory = {(e)=>changeCategory(e.target.value)}  
                 setOrderBy = {(e)=>orderProductsList(e.target.value)}   
                 currentCategory = {state.filterCategory}                           
             />          
            <h1 className='w-100 font-weight-light'>{state.filterCategory.toUpperCase()}</h1>
            <div className="d-flex row m-0">
                {state.list.length ? state.list.map((item, index)=>(
                    <ProductCard
                        key={index}
                        productKey={item.id}
                        title={item.title}  
                        price={item.price}                                    
                        image={item.image} 
                        description={item.description}
                        rate={item.rating.rate}     
                        cardClicked = {()=>{                                        
                            setState({
                                ...state,
                                showModal: true,
                                selectedProduct:item
                            })
                        }}                 
                    />
                )):(
                    <div className='w-100'>
                        <Spinner/>
                    </div>
                )}

                {state.showModal ? (
                    <DetailsModal                    
                        selectedProduct = {state.selectedProduct}  
                        closeModal = {()=>{
                            setState({
                                ...state,
                                showModal:false,
                                selectedProduct:{}
                            })
                        }}                
                    />
                ) : null}                
            </div>           
        </div>  
    );
};
