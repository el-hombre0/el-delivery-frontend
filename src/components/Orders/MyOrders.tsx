import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { fetchMyOrders } from "../../redux/slices/order";

export const MyOrders = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(fetchMyOrders());
    }, [])
    return <div className="myorders"></div>
}