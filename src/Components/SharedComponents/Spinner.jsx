import '../../styles/spinnner.css';
export default function Spinner(){
    return(
        <div className="d-flex justify-content-center w-100">
            <div className='mainLoader'>
                <div className='spinner'></div>
                <h4 className='text-dark'>Loading Products</h4>
            </div>
        </div>        
    );
}
