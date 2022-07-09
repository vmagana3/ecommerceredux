export default function SubscribeUs(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center w-50 text-center mt-5">
            <h3>Subscribe to our store</h3>                                
            <h4 className="font-weight-light">Subscribe to receive info about our best promotions and products</h4>
            <div className="d-flex justify-content-around w-75">
                <div class="input-group mt-2">
                    <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                </div>
            </div>
        </div>                
    );
}
