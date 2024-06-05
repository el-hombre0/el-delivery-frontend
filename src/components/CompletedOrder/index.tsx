import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { fetchOneOrder } from "../../redux/slices/oneOrder";
import { selectIsAuth } from "../../redux/slices/auth";
import { OneOrder } from "../OneOrder";

export const CompletedOrder = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const { id } = useParams();
  const oneOrder = useSelector((state: any) => state.oneOrder);

  useEffect(() => {
    dispatch(fetchOneOrder(id));
  }, []);
  const isOrderLoading = oneOrder.status === "loading";
  const isOrderError = oneOrder.status === "error" || !isAuth;
  console.log("oneOrder after useEffect", oneOrder);

  return (
    <div className="container">
      {!isOrderLoading && !isOrderError ? (<>
        <h1>Ваш заказ успешно оформлен!</h1>
        <p>Бригада уже в пути. Ожидаемое время прибытия <b></b></p>
        <p>
          Номер Вашего заказа:<b> {oneOrder.oneOrder.items.id}</b>
        </p>
        <h3>Данные заказа:</h3>
        <OneOrder oneOrder={oneOrder} />
        </>
      ) : !isAuth ? (
        <Navigate to="/login" />
      ) : (
        <p>Ошибка</p>
      )}
    </div>
  );
};
