import {FaCcVisa, FaCcMastercard, FaCcPaypal, FaFacebook, FaInstagramSquare } from 'react-icons/fa';
export default function Footer(){
    return(
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-evenly text-light" style={{minHeight:'25vh'}}>

            <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                <p className='font-weight-bold'>Pay methods</p>
                <div className='d-flex justify-content-around w-100'>
                    <FaCcVisa color='white' size={45}/>
                    <FaCcMastercard  color='white' size={45}/>
                    <FaCcPaypal  color='white' size={45}/>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center w-25">
                <p className='font-weight-bold'>Follow us</p>
                <div className='d-flex justify-content-around w-100'>
                    <FaFacebook color='white' size={45}/>
                    <FaInstagramSquare  color='white' size={45}/>                    
                </div>
            </div>


            <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                <h6>Bulded by: <span className='font-weight-light'>Gerzain Magaña</span></h6>
            </div>
        </nav>
    );
};
