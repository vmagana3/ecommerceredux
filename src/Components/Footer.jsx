export default function Footer(){
    return(
        <nav className="navbar  navbar-dark bg-dark text-white row m-0 pl-5 pr-5 pt-5 pb-5 d-flex align-items-end">
                <div className='col-lg-2'>
                    <p className='h6 font-weight-light'>Pay Methods</p>
                    <div className='d-flex justify-content-between'>
                        <img src={require('../utils/images/paypal.png')} style={{width:'30px', height:'30px'}} alt="paypal" />
                        <img src={require('../utils/images/american-express.png')} style={{width:'30px', height:'30px'}} alt="americanexpress" />
                        <img src={require('../utils/images/visa.png')} style={{width:'30px', height:'30px'}} alt="visa" />
                    </div>
                </div>

                <div className='col-lg-2'>
                    <p className='text-center font-weight-light'>Follow Us</p>  
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex justify-content-around w-50'>
                            <img src={require('../utils/images/facebook.png')} style={{width:'30px', height:'30px'}} alt="facebook" />
                            <img src={require('../utils/images/instagram.png')} style={{width:'30px', height:'30px'}} alt="instagram" />
                        </div>                    
                    </div>                  
                </div>
                
                <div className='col-lg-4 text-center'>
                    <p className='font-weight-bold m-0'>Developer</p>
                    <p> <span>GitHub: </span> Gerzain Magaña</p>
                </div>
        </nav>
    );
};
