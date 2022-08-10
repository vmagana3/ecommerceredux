import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
export default function SubscribeUs(){

    const [state, setState] = useState({
        email:'',
        isValidEmail: false,
    });

    let emailRegex = /[A-Za-z0-9/.]+@[a-z]+\.+[a-zA-Z]{1,5}/;
    
    const MySwal = withReactContent(Swal);

    const subscribeUs = ()=>{
        if(emailRegex.test(state.email)){
            setState({
                ...state,
                email:''
            })
            MySwal.fire({
                icon: 'success',
                title: 'Subscribed successfully!',
                text: 'You will receive info about our best promotions and products',
                timer:3000,
                showConfirmButton: false, 
            });
        }else{
            setState({
                ...state,
                isValidEmail: true,
            })
        }
    };

    return(
        <div className="d-flex flex-column justify-content-center align-items-center w-50 text-center mt-5 mb-5 pt-5 pb-5">
            <h3>Subscribe to our store</h3>                                
            <h4 className="font-weight-light">Subscribe to receive info about our best promotions and products</h4>
            <div className="d-flex justify-content-around w-75">
                <div className="input-group mt-2">
                    <input type="text" className="form-control" value={state.email} placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e)=>setState({
                        email:e.target.value
                    })}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={subscribeUs}>Subscribe</button>
                        </div>
                </div>                
            </div>
            {state.isValidEmail ? (<small className="text-danger">This is not a valid email!</small>) : null}            
        </div>                
    );
}
