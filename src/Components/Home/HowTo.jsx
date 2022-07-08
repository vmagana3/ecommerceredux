import {FcCursor, FcInTransit ,FcShipped, FcCheckmark, FcMoneyTransfer} from 'react-icons/fc';
export default function HowTo(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-5">

            <div className='mb-5'>
                <h1>Easy to buy</h1>
            </div>

            <div className='d-flex justify-content-around w-100 font-weight-bold'>
                <div className="d-flex flex-column align-items-center justify-content-around">
                    <FcCursor size={100}/>
                    <p>Select Products</p>
                </div>   

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <FcMoneyTransfer size={100}/>
                    <p>Many Pay Methods</p>
                </div> 

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <FcInTransit size={100}/>                
                        <FcCheckmark size={40}/>
                    </div>                
                    <p>Safe Transit</p>
                </div> 

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <FcShipped size={100}/>
                    <p>Safe Delivery</p>
                </div> 
            </div>         
        </div>
    );
};
