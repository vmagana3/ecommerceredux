import '../styles/spinnner.css';
export default function Spinner(){
    return(
        <div class="d-flex justify-content-center">
            <div className='mainLoader'>
                <div className='spinner'></div>
                <h4 className='text-dark'>Loading Products</h4>
            </div>
        </div>        
    );
}
