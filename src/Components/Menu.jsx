import {FcPaid, FcShop} from 'react-icons/fc';
export default function Menu(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark row m-0">                

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand col-lg-1 d-flex flex-column align-items-center" href="/">
                    My Store
                    <FcShop size={50}/>
                </a>

                <div className="collapse navbar-collapse col-lg-11" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto col-lg-2">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Categorie 1</a>
                                <a className="dropdown-item" href="/">Categorie 2</a>                                
                                <a className="dropdown-item" href="#">Categorie 3</a>
                            </div>
                        </li>                        
                    </ul>
                    
                    <div className='col-lg-9 d-flex'>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
                    </div>                       

                    <div className='col-lg-1 d-flex justify-content-center'>
                        <a href="/cart" className='d-flex flex-column justify-content-center align-items-center'>
                            <FcPaid size={35} title="shopingcart"/>                            
                            <span className='text-light font-weight-bold'>$ 0.0</span>
                        </a>                                                
                    </div>                
                </div>
            </nav>
        </>
    );
};
