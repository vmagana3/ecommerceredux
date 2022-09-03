import { useState, useEffect } from "react";
import LocationForm from "./Pay/LocationForm";
export default function Pay(){
    const [state, setState] = useState({
        showLocationForm: true
    });

    return(
        <div className="w-100 p-5">
            {state.showLocationForm ? (
                <LocationForm/>
            ):(
                <p>Paypal componente</p>
            )}            
        </div>
    )
};
