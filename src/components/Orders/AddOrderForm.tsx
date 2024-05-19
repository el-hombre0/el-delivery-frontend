export const AddOrderForm = (props: any) => {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <label className="form-label" htmlFor="fistNameInput">
          Имя
        </label>
        <input
          type="text"
          className="form-control"
          id="fistNameInput"
          {...props.register("clientName")}
          placeholder="Иван"
          required
        ></input>
        <label className="form-label" htmlFor="lastNameInput">
          Фамилия
        </label>
        <input
          type="text"
          className="form-control"
          id="lastNameInput"
          {...props.register("clientSurname")}
          placeholder="Иванов"
          required
        ></input>
        <label className="form-label" htmlFor="phoneInput">
          Номер телефона
        </label>
        <input
          type="tel"
          className="form-control"
          id="phoneInput"
          {...props.register("clientPhone")}
          placeholder="89991112233"
          required
        ></input>

        <label className="form-label" htmlFor="emailInput">
          Электронная почта
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          {...props.register("clientEmail")}
          placeholder="ivanov@delivery.com"
          required
        ></input>

        <label className="form-label" htmlFor="carModelInput">
          Марка и модель автомобиля
        </label>
        <input
          type="text"
          className="form-control"
          id="carModelInput"
          {...props.register("carModel")}
          placeholder="Tesla Model X"
          required
        ></input>

        <label className="form-label" htmlFor="requiredKiloWattsInput">
          Требуемое количества КВт*Ч
        </label>
        <input
          type="number"
          className="form-control"
          id="requiredKiloWattsInput"
          {...props.register("requiredKiloWatts")}
          placeholder="50"
        ></input>

        <label className="form-label" htmlFor="paymentMethodInput">
          Метод оплаты
        </label>
        <select id="paymentMethodInput" {...props.register("paymentMethod")}>
          <option>Наличные</option>
          <option>Банковская карта</option>
        </select>
        <div className="form-group mb-2 p-2">
          <button type="submit" className="btn btn-primary">
            Отправить заказ
          </button>
        </div>
      </form>
    </>
  );
};
