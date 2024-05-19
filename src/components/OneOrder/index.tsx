import { IOrder } from "../../types/order.types";

export const OneOrder = (props: any) => {
  console.log("props: ", props);
  return (
    <div className="OneOrder">
      
      <table className="table">
        <thead>
          <tr>
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
          <tr key={props.oneOrder.oneOrder.items.id}>
            <td>{props.oneOrder.oneOrder.items.clientName}</td>
            <td>{props.oneOrder.oneOrder.items.clientSurname}</td>
            <td>{props.oneOrder.oneOrder.items.clientPhone}</td>
            <td>{props.oneOrder.oneOrder.items.clientEmail}</td>
            <td>{props.oneOrder.oneOrder.items.carModel}</td>
            <td>{props.oneOrder.oneOrder.items.requiredKiloWatts}</td>
            <td>{props.oneOrder.oneOrder.items.distanceToClient}</td>
            <td>{props.oneOrder.oneOrder.items.address}</td>
            <td>{props.oneOrder.oneOrder.items.cost}</td>
            <td>{props.oneOrder.oneOrder.items.paymentMethod}</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
