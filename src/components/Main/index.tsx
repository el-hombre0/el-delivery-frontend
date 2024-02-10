import useGeolocation from "../../hooks/useGeolocation";
import { AddOrder } from "../Orders/AddOrder";
export const Main = () => {
  const location = useGeolocation();

  return (
    <>
      <h1 className="text-center">Главная страница</h1>
      {location.loaded
        ? JSON.stringify(location)
        : "Location data is not available yet."}
      <AddOrder/>
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
