import { useEffect, useState } from "react";
import { listOrders } from "../../services/OrderService";
interface Order {
  id: number;
  clientName: string;
  clientSurname: string;
  clientPhone: string;
  clientEmail: string;
  carModel: string;
  requiredKiloWatts: number;
  distanceToClient: number;
  address: string;
  cost: number;
  paymentMethod: string;
}
export const Orders = () => {
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  useEffect(() => {
    listOrders()
      .then((resp) => {
        setOrdersList(resp.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
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
  //   }
  // ];

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
            </tr>
          </thead>
          <tbody>
            {ordersList.map((order) => (
              <tr key={order.id}>
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
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
