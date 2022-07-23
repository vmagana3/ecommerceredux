import {FaCartPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NoProductsCart(){
    return(
        <div className="d-flex flex-column justify-content-around align-items-center mt-5 mb-5 pt-5 pb-5">
            <p className='display-4'>Cart is Empty</p>
            <FaCartPlus size={100} color={'gray'}/>
            <Link to='/products/all' className='font-weight-light'>Add some Products</Link>   
        </div>
    );
}