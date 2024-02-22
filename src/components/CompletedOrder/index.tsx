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
    <div>
      {!isOrderLoading && !isOrderError ? (
        <OneOrder oneOrder={oneOrder} />
      ) : !isAuth ? (
        <Navigate to="/login" />
      ) : (
        <p>Ошибка</p>
      )}
    </div>
  );
};
