
//Components
import HowTo from '../Components/Home/HowTo';
import SubscribeUs from '../Components/Home/SubscribeUs';
import BestProducts from '../Components/Home/BestProducts';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { useEffect } from 'react';


export default function Home(){

    const MySwal = withReactContent(Swal);

    useEffect(()=>{
        MySwal.fire({
            icon: 'info',
            title: 'Important',
            text: 'This app is just a demo, all data and information displayed here is for test purposes',
            footer: '<a href="https://github.com/vmagana3">About Developer</a>'
        })       
    },[])

    return(
        <div className="d-flex flex-column justify-content-between align-items-center m-5">
            <BestProducts/>
            <HowTo/>                                  
            <SubscribeUs/>            
        </div>
    );
};
