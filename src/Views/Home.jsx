//Components
import HowTo from '../Components/Home/HowTo';
import SubscribeUs from '../Components/Home/SubscribeUs';

export default function Home(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center m-5">
            <HowTo/>                                  
            <SubscribeUs/>
        </div>
    );
};
