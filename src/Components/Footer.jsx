import {FaCcVisa, FaCcMastercard, FaCcPaypal, FaFacebook, FaInstagramSquare } from 'react-icons/fa';
export default function Footer(){
    return(
        <nav class="navbar  navbar-dark bg-dark text-white row m-0 pl-5 pr-5 pt-4 pb-4">
                <div className='col-lg-2'>
                    <p className='h6 font-weight-light'>Pay Methods</p>
                    <div className='d-flex justify-content-between'>
                        <img src={require('../utils/images/paypal.png')} style={{width:'40px', height:'40px'}} alt="paypal" />
                        <img src={require('../utils/images/american-express.png')} style={{width:'40px', height:'40px'}} alt="americanexpress" />
                        <img src={require('../utils/images/visa.png')} style={{width:'40px', height:'40px'}} alt="visa" />
                    </div>
                </div>

                <div className='col-lg-1'>
                    <p>Follow Us</p>  
                    <div className='d-flex justify-content-between'>
                        <img src={require('../utils/images/facebook.png')} style={{width:'40px', height:'40px'}} alt="facebook" />
                        <img src={require('../utils/images/instagram.png')} style={{width:'40px', height:'40px'}} alt="instagram" />
                    </div>                  
                </div>
                
                <div className='col-lg-4 text-center'>
                    <p className='font-weight-bold m-0'>Developer</p>
                    <p> <span>GitHub: </span> Gerzain Magaña</p>
                </div>
        </nav>
    );
};
