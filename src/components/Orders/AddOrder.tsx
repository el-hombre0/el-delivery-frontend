import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { useState } from "react";
import instance from "../../services/axios_helper";
import { useNavigate } from "react-router-dom";

export const AddOrder = () => {
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      clientName: "Сергей",
      clientSurname: "Осипов",
      clientPhone: "89997771144",
      clientEmail: "osipov@mail.ru",
      carModel: "Tesla Model S",
      requiredKiloWatts: 30.0,
      distanceToClient: 19.5,
      address: "Vladivostok, Lenina st., b. 9",
      cost: 5900.0,
      paymentMethod: "",
    },
    mode: "onChange",
  });
  const navigate = useNavigate();
  const onSubmit = async (values: any) => {
    try {
      setLoading(true);
      const { data } = await instance.post("/neworder", values);
      console.log("data", data);
      const id = data.id;
      navigate(`/orders/${id}`);
    } catch (error) {
      console.warn(error);
      alert("Ошибка при создании заказа!");
    }
  };
  return (
    <div className="addOrder">
      <h2>Создать заказ</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label" htmlFor="fistNameInput">
          Имя
        </label>
        <input
          type="text"
          className="form-control"
          id="fistNameInput"
          {...register("clientName")}
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
          {...register("clientSurname")}
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
          {...register("clientPhone")}
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
          {...register("clientEmail")}
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
          {...register("carModel")}
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
          {...register("requiredKiloWatts")}
          placeholder="50"
        ></input>

        <label className="form-label" htmlFor="paymentMethodInput">
          Метод оплаты
        </label>
        <select id="paymentMethodInput" {...register("paymentMethod")}>
          <option>Наличные</option>
          <option>Банковская карта</option>
        </select>
        <div className="form-group mb-2 p-2">
          <button type="submit" className="btn btn-primary">
            Отправить заказ
          </button>
        </div>
      </form>
    </div>
  );
};
