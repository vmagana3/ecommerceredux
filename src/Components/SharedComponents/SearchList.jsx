import '../../styles/searchList.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {FaSearch, FaWindowClose} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import actions from '../../Redux/actions';
import DetailsModal from '../SharedComponents/DetailsModal';

export default function SearchList({items, searchProducts: _searchProducts, clearInput:_clearInput}){

    const dispatch = useDispatch();
    let navigate = useNavigate();

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

    const setFindededProducts = ()=>{        
        dispatch(actions.setFindedProducts(items));
        navigate('/products/finded');
    }

    return(
        <div className="w-100 d-flex justify-content-around">
            <div className='w-75'>     
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="input-group w-75">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={_searchProducts}/>
                        <div className="input-group-append">
                            <button disabled={items.length ? false : true} className="btn btn-secondary d-flex justify-content-center align-items-center" type="button" onClick={_clearInput}>
                                <FaWindowClose/>
                            </button>
                        </div>
                    </div>

                    <a className="btn btn-info my-2 my-sm-0 d-flex justify-content-between text-light align-items-center"  onClick={setFindededProducts}><FaSearch className='mr-2'/>Search</a>                   
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
