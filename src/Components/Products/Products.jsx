import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

export default function Products(){

    const products = useSelector((state)=>state.products);
    const {category} = useParams();

    //const [productsFiltered, setProductsFiltered] = useState([]);
    const productsFiltered = products.filter((product)=> product.category.replace(/ /g, "") === category);

    console.log(productsFiltered);

  /*   const filterProducts = (filterCategory)=>{
        console.log("Filtro recibido", filterCategory);
        const filtered = products.filter((product)=> product.category.replace(/ /g, "") === filterCategory);
        console.log(filtered);
    } */

    /* useEffect(()=>{
        setProductsFiltered(products.filter((product)=> product.category.replace(/ /g, "") === category));
    },[category]); */

    /* console.log(productsFiltered); */

    return(
        <div className='w-100 d-flex flex-column mt-5 mb-5 bg-info p-5'>            
            <h1 className='w-100 display-4'>Categorie Name</h1>
            <div className="bg-success">
            </div>
        </div>  
    );
};
