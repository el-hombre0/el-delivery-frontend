import { useSelector } from "react-redux";
import useGeolocation from "../../hooks/useGeolocation";
import { AddOrder } from "../Orders/AddOrder";
import { selectIsAuth } from "../../redux/slices/auth";
import { MapBox } from "../MapBox";
export const Main = () => {
  const location = useGeolocation();
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <h1 className="text-center">Главная страница</h1>
      {/* {location.loaded
        ? JSON.stringify(location)
        : "Location data is not available yet. "} */}
      <div className="container-sm">
        {location.loaded ? (
          <MapBox location={location} />
        ) : location.error ? (
          `Данные геопозиции пока недоступны. Повторите попытку позже. ${location.error}`
        ) : (
          `Данные геопозиции пока недоступны. Повторите попытку позже.`
        )}
      </div>
      <div className="container-md">
        {!isAuth && <h4>Для создания заказа авторизуйтесь!</h4>}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#placeOrderModal"
          disabled={!isAuth}
        >
          Заказать
        </button>
      </div>
      <div
        className="modal fade"
        id="placeOrderModal"
        tabIndex={-1}
        aria-hidden="true"
        aria-labelledby="placeOrderModalLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="placeOrderModalLabel">
                Создать заказ
              </h5>
            </div>
            <div className="modal-body">
              <AddOrder />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
              {/* <button type="button" className="btn btn-primary">Сохранить изменения</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
