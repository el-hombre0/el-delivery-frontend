import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { fetchOrders } from "../../redux/slices/order";


export const FullOrder = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const ordersList = useSelector((state: any) => state.orders.orders);
  const temp = { id: -1 };
  const [orderById, setOrderById] = useState(temp);
  // const [isOrdersLoading, setOrdersLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchOrders());
    for (const ord of ordersList.items) {
      if (ord.id == id) {
        setOrderById(ord);
        console.log("ord:", ord);
        // setOrdersLoading(false);
      }
    }
  }, []);
  const isOrdersLoading = ordersList.status === "loading";
  const isOrdersError = ordersList.status === "error";

  // console.log("orderById", orderById);

  console.log("ordersList:", ordersList);

  return (
    <div>
      <div>Спасибо за заказ! Бригада уже в пути</div>
      <div>Ваш заказа номер: {!isOrdersLoading && orderById.id}</div>
    </div>
  );
};
