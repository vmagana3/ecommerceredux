import { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {FaHome} from 'react-icons/fa';
import { Link } from "react-router-dom";
import actions from '../../Redux/actions';
import { useDispatch } from "react-redux";

export default function LocationForm(){

    const [state, setState] = useState({
        name:'',
        lastname:'',
        phone:0,
        street:'',
        number:0,
        city:'',
        stateName:'',
        country:'',
        confirmCompleted:false,        
    });    

    const stringRegex = /[a-zA-ZñÑáéíóú]/;
    const phoneRegex = /[0-9]{10,13}/;
    const numberRegex = /[0-9]/;
    const MySwal = withReactContent(Swal);
    const dispatch = useDispatch();

    const validDatForm = (e)=>{
        e.preventDefault();
        const {name, lastname, phone, street, number, city, stateName, country} = state;
        
        if(!name.length || !stringRegex.test(name)){
            Toast.fire({
                icon: 'warning',
                title: 'Type a valid name'
            });
            return
        }

        if(!lastname.length || !stringRegex.test(lastname)){
            Toast.fire({
                icon: 'warning',
                title: 'Type a valid last name'
            });
            return
        }

        if(!phone.length || !phoneRegex.test(phone)){
            Toast.fire({
                icon: 'warning',
                title: 'Type a valid phone'
            });
            return
        }

        if(!street.length || !stringRegex.test(street)){
            Toast.fire({
                icon: 'warning',
                title: 'Type a valid street'
            });
            return
        }

        if(!number.length || !numberRegex.test(number)){
            Toast.fire({
                icon: 'warning',
                title: 'Type a valid address number'
            });
            return
        }

        if(!city.length || !stringRegex.test(city)){
            Toast.fire({
                icon: 'warning',
                title: 'Type a valid city name'
            });
            return
        }

        if(!stateName.length || !stringRegex.test(stateName)){
            Toast.fire({
                icon: 'warning',
                title: 'Type a valid state name'
            });
            return
        }

        if(!country.length || !stringRegex.test(country)){
            Toast.fire({
                icon: 'warning',
                title: 'Type a valid country'
            });
            return
        }

        Swal.fire({
            title: 'Verify your information',
            icon: 'info',
            html:
              `
              <div>
                <p class="font-weight-bold">Name:<span class="font-weight-light"> ${name}</span></p>
                <p class="font-weight-bold">Last Name:<span class="font-weight-light"> ${lastname}</span></p>
                <p class="font-weight-bold">Phone Number:<span class="font-weight-light"> ${phone}</span></p>
                <p class="font-weight-bold">Address:<span class="font-weight-light"> ${street} #${number} ${city} ${stateName} ${country}</span></p>                
              </div>
              `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:'Confirm',                         
            cancelButtonText:'Cancel',            
          }).then(({dismiss})=>{
            if(!dismiss){                
                Swal.fire({
                    title: 'Confirmation completed',
                    icon: 'success',                    
                    showCloseButton: false,
                    showCancelButton: false,                                                                                     
                  }).then(({dismiss})=>{
                    if(!dismiss){
                        setState({
                            ...state,
                            confirmCompleted: true
                        });
                        dispatch(actions.addCartItem([]));
                    }
                  });
            }
          });

        
    };

    const setInputDataOnState = ({target})=>{
        let name = target.name;
        setState({
            ...state,
            [name]:target.value,
        });                
    };

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

    return(    
        <div className="container d-flex flex-column justify-content-center align-items-center">
            {state.confirmCompleted ? (
                <div className="p-5 m-5 d-flex flex-column justify-content-center align-items-center">
                    <Link className="btn btn-info" to="/ecommerceredux">Go Home</Link>
                    <FaHome className="mt-3 mb-5" size={60}/>
                </div>                
            ) : (
                <div>
                    <h2>Delivery adress</h2>                         
                    <form className="text-secondary" style={{fontSize:'95%'}}>
                        <div class="form-group">
                            <label className="m-0" for="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" placeholder="Your Name Here!" name="name" onChange={setInputDataOnState}/>                    
                        </div>
                        <div class="form-group">
                            <label className="m-0" for="exampleInputPassword1">Last Name</label>
                            <input type="text" className="form-control" placeholder="Your last name here!" name="lastname" onChange={setInputDataOnState}/>
                        </div>
                        <div class="form-group">
                            <label className="m-0" for="exampleInputPassword1">Phone Number</label>
                            <input type="number" className="form-control" placeholder="Your phone here" name="phone" onChange={setInputDataOnState}/>
                        </div>

                        <label htmlFor="">Address</label>
                        <div class="row">                    
                            <div class="col">
                                <input type="text" className="form-control" placeholder="Street" name="street" onChange={setInputDataOnState}/>
                            </div>
                            <div class="col">
                                <input type="number" className="form-control" placeholder="Number" name="number" onChange={setInputDataOnState}/>
                            </div>                    
                        </div>

                        <div class="row mt-2">                    
                            <div class="col">
                                <input type="text" className="form-control" placeholder="City" name="city" onChange={setInputDataOnState}/>
                            </div>                                    
                        </div>

                        <div class="row mt-2">                    
                            <div class="col">
                                <input type="text" className="form-control" placeholder="State" name="stateName" onChange={setInputDataOnState}/>
                            </div>                                    
                        </div>

                        <div class="row mt-2">                    
                            <div class="col">
                                <input type="text" className="form-control" placeholder="Country" name="country" onChange={setInputDataOnState}/>
                            </div>                                    
                        </div>

                        <button type="submit" class="btn btn-primary mt-3 w-100" onClick={validDatForm}>Confirm Order</button>
                    </form>
                </div>
            )}            
        </div>
    )
};
