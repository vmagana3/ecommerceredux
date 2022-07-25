import {FcCursor, FcInTransit ,FcShipped, FcCheckmark, FcMoneyTransfer} from 'react-icons/fc';
export default function HowTo(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-5 mb-5 pt-5 pb-5">

            <div className='mb-5'>
                <h1 className='display-4'>Easy to buy</h1>
            </div>

            <div className='d-flex justify-content-around w-100 font-weight-bold'>
                <div className="d-flex flex-column align-items-center justify-content-around">
                    <FcCursor size={100}/>
                    <h4>Select Products</h4>
                </div>   

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <FcMoneyTransfer size={100}/>
                    <h4>Many Pay Methods</h4>
                </div> 

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <FcInTransit size={100}/>            
                        <FcCheckmark size={40}/>
                    </div>                
                    <h4>Safe Transit</h4>
                </div> 

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <FcShipped size={100}/>
                    <h4>Safe Delivery</h4>
                </div> 
            </div>         
        </div>
    );
};
