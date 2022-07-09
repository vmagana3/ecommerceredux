import { useEffect } from 'react';
//Redux Hooks
import { useDispatch, useSelector } from 'react-redux';
//Action creators
import actions from '../Redux/actions';
//Components
import HowTo from '../Components/Home/HowTo';
import SubscribeUs from '../Components/Home/SubscribeUs';



export default function Home(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.getApiProducts());
    },[])

    return(
        <div className="d-flex flex-column justify-content-center align-items-center m-5">
            <HowTo/>                                  
            <SubscribeUs/>            
        </div>
    );
};
