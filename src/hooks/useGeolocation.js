import { useEffect, useState } from 'react';

const useGeolocation = () => {
    const [location, setLocation] = useState({ 
        loaded: false, 
        coordinates: {lat: "", lng: ""},
        error: null
    });
    const onSuccess = location => {
        setLocation(
            {
                loaded: true,
                coordinates: {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                }
            }
        );
    }

    const onError = error => {
        setLocation(
            {
                loaded: true,
                error: error,
            }
        );
    }
    useEffect(()=> {
        if(!("geolocation" in navigator)){
            onError({
                code: 0,
                message: "Geolocation is not supported"
            });
            
        }
        navigator.geolocation.getCurrentPosition(onSuccess);
    }, []);
    return location;
}

export default useGeolocation;