import {FaPlus} from 'react-icons/fa';

export default function ProductCard({title, price, rate, image, cardClicked}){

    return(
        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5 mb-5" onClick={cardClicked}>
            <div className="w-25 h-50 d-flex justify-content-center align-items-center">
                <img className="card-img-top" src={image} alt="Card image cap"style={{cursor:'pointer'}}/>
            </div>            
            <div className="card-body h-50 d-flex flex-column justify-content-around align-items-center">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text">$ {price}</p>            
                <p className="card-text">Rate {rate}</p>
                <a href="#" className="btn btn-primary d-flex justify-content-around align-items-center">
                    Add to cart 
                    <FaPlus className='ml-2'/>
                </a>
            </div>                       
        </div>
    );
};

