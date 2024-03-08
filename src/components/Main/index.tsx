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
      {location.loaded
        ? JSON.stringify(location)
        : "Location data is not available yet."}
      {location.loaded ? (
        <MapBox location={location} />
      ) : (
        "Location data is not available yet."
      )}
      {isAuth && <AddOrder />}
      <div className="d-flex">
        <button type="button" className="btn btn-secondary">
          Закрыть
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#placeOrderModal"
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
            <div className="modal-header"></div>
            <div className="modal-body"></div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};
