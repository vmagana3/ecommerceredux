export default function Cart(){
    return(
        <div className="d-flex flex-column mt-5 mb-5">
            <div className="w-100 p-5">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Qantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>test</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>test</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>test</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>                
            </div>

            <div className="w-100 p-5 d-flex justify-content-between align-items-center mb-5">
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <h3>Tienes 0 productos en tu carrito</h3>
                </div>
                <div className="w-50 d-flex flex-column p-3">
                    <div className="d-flex justify-content-between">
                        <p>Total de productos:</p>
                        <p>$1656.99</p>
                    </div>
                    <div className="d-flex justify-content-between border border-top-0 border-left-0 border-right-0 mb-1">
                        <p>Envío:</p>
                        <p>$99.00</p>                    
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Total:</p>
                        <p>$2494.00</p>                    
                    </div>  
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success w-25">Next Step</button>                        
                    </div>                    
                </div>
            </div>
        </div>
    );
};
