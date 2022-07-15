import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import ProductCard from '../SharedComponents/ProductCard';
import FiltersBar from './FiltersBar';
import Spinner from '../SharedComponents/Spinner';

export default function Products(){

    const products = useSelector((state)=>state.products);
    const {category} = useParams();

    const [state, setState] = useState({
        list:[],
        filterCategory:'',
        orderPrice:'',
        orderByRate:0,
    });

    useEffect(() => {
        setState({
            ...state,
            list: category !== 'all' ? products.filter((product)=> product.category.replace(/ /g, "") === category) : products,
            filterCategory:category,
        });
    }, [products]);

    const changeCategory = (category)=>{
        setState({
            ...state,
            filterCategory:category,
            list: category !== 'all' ? products.filter((product)=> product.category.replace(/ /g, "") === category) : products,
        })
    }

    return(
        <div className='w-100 d-flex flex-column mt-5 mb-5 p-5'>
            <FiltersBar
            setCategory = {(e)=>changeCategory(e.target.value)}                                
            />
            <h1 className='w-100 font-weight-light'>{state.filterCategory.toUpperCase()}</h1>
            <div className="d-flex row m-0">
                {state.list.length ? state.list.map((item, index)=>(
                    <ProductCard
                        key={index}
                        title={item.title}  
                        price={item.price}                                    
                        image={item.image} 
                        description={item.description}                    
                    />
                )):(
                    <div className='w-100'>
                        <Spinner/>
                    </div>
                )}
            </div>           
        </div>  
    );
};
