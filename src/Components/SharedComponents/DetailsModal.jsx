import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function DetailsModal({ selectedProduct, closeModal}){
    const {title, price, description, image, } = selectedProduct;
    const [counter, setCounter] = useState(1);
    return(
        <div className="modal d-block" id="exampleModalCenter" tabIndex="-1" style={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>                
                <div className="modal-body text-dark">
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="w-25" src={image} alt="" />                                                                        
                    </div>
                    <div className="text-center">
                        <p className="h2">{title}</p>
                    </div> 
                    <div className="">
                        <p>{description}</p>                        
                    </div>          
                    <div className="">
                        <p className="font-weight-bold h2">${price}</p>                        
                    </div>                                           
                </div>
                    <div className="modal-footer d-flex justify-content-between">   
                        <div className="d-flex justify-content-between align-items-center w-25">
                            <button className="btn btn-sm btn-info" onClick={()=>setCounter(counter - 1)} disabled={counter === 0 ? true : false}>
                                <FaMinus/>
                            </button>                        
                            <p className="h3">{counter}</p>
                            <button className="btn btn-sm btn-info" onClick={()=>setCounter(counter + 1)}>
                                <FaPlus/>
                            </button>                            
                        </div>     
                        <div className="w-50 d-flex justify-content-around">
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={closeModal}>Add to cart</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>                    
                        </div>                                                           
                    </div>
                </div>
            </div>
    </div>    
    );
};
