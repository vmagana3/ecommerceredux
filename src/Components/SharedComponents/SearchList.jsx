import '../../styles/searchList.css';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import DetailsModal from '../SharedComponents/DetailsModal';

export default function SearchList({items, searchProducts: _searchProducts}){

    const [state, setState] = useState({
        showModal: false,
        selectedProduct:{}
    });

    const getSelectedProduct = (e)=>{
        const {id} = e.target;
        const findedProduct = items.filter((product, index)=> product.id.toString() === id);
        setState({
            ...state,
            selectedProduct: findedProduct[0],
            showModal:true,
        })
    };

    return(
        <div className="w-100 d-flex justify-content-around">
            <div className='w-75'>     
                <div className='d-flex justify-content-center align-items-center'>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={_searchProducts}/>                                                                                      
                    <button className="btn btn-info my-2 my-sm-0 d-flex justify-content-between align-items-center" type="submit"><FaSearch className='mr-2'/>Search</button>                   
                </div>                         
                <div className={items.length ? 'text-light p-3 rounded':'d-none'} style={{position:'absolute', zIndex:100, backgroundColor:'#ffffff'}}>
                    {items.length ? items.map((item,index)=>(
                        <div className='mb-2'>                                        
                            <p className='text-dark' id={item.id} style={{cursor:'pointer'}} onClick={getSelectedProduct} key={index}>{item.title.substring(0,100)}</p>
                        </div>                                    
                         )): null}                                
                </div>
            </div> 

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
            ): null}                       
            
        </div>
    );
};
