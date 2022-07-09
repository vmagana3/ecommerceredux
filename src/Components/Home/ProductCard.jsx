export default function ProductCard({key, title, price, description, image}){
    return(
        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5 mb-5" key={key}>
            <div className="w-25 h-50 d-flex justify-content-center align-items-center">
                <img className="card-img-top" src={image} alt="Card image cap"/>
            </div>            
            <div className="card-body h-50 d-flex flex-column justify-content-around align-items-center">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text">$ {price}</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    );
};

