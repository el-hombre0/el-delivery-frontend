import { useEffect } from "react";
import { fetchOrders } from "../../redux/slices/order";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { IOrder } from "../../types/order.types";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { Link } from "react-router-dom";

const options = [
  {
    label: "PROCESSING",
    value: "PROCESSING",
  },
  {
    label: "ACCEPTED",
    value: "ACCEPTED",
  },
  {
    label: "COMPLETED",
    value: "COMPLETED",
  },
];
export const Orders = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const ordersList = useSelector((state: any) => state.orders.orders);
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  console.log("ordersList: ", ordersList);
  const isOrdersLoading = ordersList.status === "loading";
  const isOrdersError = ordersList.status === "error" && !isAuth;
  // const orderList = [
  //   {
  //     id: 0,
  //     clientName: "Carl",
  //     clientSurname: "Jonson",
  //     clientPhone: "89992342123",
  //     clientEmail: "adcjhba@mail.ru",
  //     carModel: "Tesla X",
  //     requiredKiloWatts: 27.0,
  //     distanceToClient: 20.0,
  //     address: "Three st., b. 8",
  //     cost: 11600.0,
  //     paymentMethod: "cash",
  //   },
  // ];
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const onSubmit = async () => {};
  return (
    <>
      <div className="container">
        <h1>Список заказов</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Телефон</th>
              <th>E-mail</th>
              <th>Модель авто</th>
              <th>Запрашиваемое количество кВт</th>
              <th>Дистанция до клиента</th>
              <th>Адрес</th>
              <th>Стоимость</th>
              <th>Метод оплаты</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {isOrdersError
              ? alert("Ошибка загрузки заказов, авторизируйтесь!")
              : isOrdersLoading
              ? [...Array(5)]
              : ordersList.items.map((order: IOrder) => (
                  <tr
                    className={`${
                      order.status === "PROCESSING"
                        ? "table-light"
                        : order.status === "ACCEPTED"
                        ? "table-warning"
                        : "table-success"
                    }`}
                    key={order.id}
                  >
                    <td>{order.id}</td>
                    <td>{order.clientName}</td>
                    <td>{order.clientSurname}</td>
                    <td>{order.clientPhone}</td>
                    <td>{order.clientEmail}</td>
                    <td>{order.carModel}</td>
                    <td>{order.requiredKiloWatts}</td>
                    <td>{order.distanceToClient}</td>
                    <td>{order.address}</td>
                    <td>{order.cost}</td>
                    <td>{order.paymentMethod}</td>
                    <td>
                      {order.status}
                      {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                          control={control}
                          name="orderStatus"
                          rules={{ required: "Статус обязателен!" }}
                          render={({
                            field: { onChange, value, name, ref },
                          }) => (
                            <Select
                              ref={ref}
                              placeholder="Роли"
                              options={options}
                              value={options.find((c) => c.value === value)}
                              onChange={(val) => onChange(val?.value)}
                              defaultValue={{
                                label: order.status,
                                value: order.status,
                              }}
                            />
                          )}
                        />
                      </form> */}
                      {/* <select>
                        <option>PROCESSING</option>
                        <option>ACCEPTED</option>
                        <option>COMPLETED</option>
                      </select> */}
                    </td>
                    <td>
                      <Link to={`/edit-order/${order.id}`}>Подробнее</Link>
                    </td>
                  </tr>
                ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
