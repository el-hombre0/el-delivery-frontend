import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { selectIsAuth, fetchRegister } from "../../redux/slices/auth";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export const Registration = () => {
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const [registered, setRegistered] = useState(false);

  const onSubmit = async (values: any) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload || !("token" in data.payload)) {
      alert("Не удалось зарегистрироваться! Повторите попытку.");
    } else {
      const decoded: any = jwtDecode(data.payload.token);
      cookies.set("token", data.payload.token, {
        expires: new Date(decoded.exp * 1000),
      });
      alert("Успешная регистрация! Войдите в аккаунт.");
      setRegistered(true);
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    // defaultValues: {
    //   firstName: "Стас",
    //   lastName: "Ефимцев",
    //   email: "newstas@mail.ru",
    //   password: "1234ASD",
    // },
    mode: "onChange",
  });
  if (registered) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h3 className="text-center">Регистрация</h3>
      <div className="container w-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-1 p-2">
            <label className="form-label" htmlFor="nameInput">
              Имя
            </label>
            <input
              type="text"
              className="form-control"
              id="firstNameInput"
              {...register("firstName", { required: "Укажите Ваше имя." })}
              placeholder="Иван"
              required
              autoFocus
            />
            <div className="invalid-feedback">
              {Boolean(errors.firstName?.message)}
            </div>
          </div>

          <div className="form-group mb-1 p-2">
            <label className="form-label" htmlFor="nameInput">
              Фамилия
            </label>
            <input
              type="text"
              className="form-control"
              id="lastNameInput"
              {...register("lastName", { required: "Укажите Вашу фамилию." })}
              placeholder="Иванов"
              required
            />
          </div>
          <div className="form-group mb-1 p-2">
            <label className="form-label" htmlFor="nameInput">
              Номер телефона
            </label>

            <input
              type="text"
              className="form-control"
              id="phoneNumberInput"
              {...register("phoneNumber", {
                required: "Укажите Ваш номер телефона.",
              })}
              placeholder="+79998887766"
              required
            />
          </div>

          <div className="form-group mb-1 p-2">
            <label className="form-label" htmlFor="loginInput">
              Логин(e-mail)
            </label>

            <input
              type="text"
              className="form-control"
              id="loginInput"
              {...register("email", { required: "Укажите Ваш e-mail." })}
              placeholder="ivanov@mail.ru"
              required
            />
          </div>

          <div className="form-group mb-2 p-2">
            <label className="form-label" htmlFor="passwordInput">
              Пароль
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              {...register("password", { required: "Укажите Ваш пароль." })}
              placeholder="Пароль"
              required
            />
          </div>
          <div className="form-group mb-2 p-2">
            <button
              disabled={!isValid}
              type="submit"
              className="btn btn-primary"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
