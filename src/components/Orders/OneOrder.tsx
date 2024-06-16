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
            <th>Запрашиваемое количество кВт*ч</th>
            <th>Дистанция до клиента, км</th>
            <th>Адрес</th>
            <th>Стоимость, руб.</th>
            <th>Метод оплаты</th>
          </tr>
        </thead>
        <tbody>
          <tr key={props.oneOrder.items.id}>
            <td>{props.oneOrder.items.clientName}</td>
            <td>{props.oneOrder.items.clientSurname}</td>
            <td>{props.oneOrder.items.clientPhone}</td>
            <td>{props.oneOrder.items.clientEmail}</td>
            <td>{props.oneOrder.items.carModel}</td>
            <td>{props.oneOrder.items.requiredKiloWatts}</td>
            <td>{props.oneOrder.items.distanceToClient}</td>
            <td>{props.oneOrder.items.address}</td>
            <td>{props.oneOrder.items.cost}</td>
            <td>{props.oneOrder.items.paymentMethod}</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
