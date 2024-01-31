import { useForm } from "react-hook-form";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const cookies = new Cookies();

  const onSubmit = async (values: any) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload || !("token" in data.payload)) {
      alert("Не удалось авторизоваться! Повторите попытку.");
    } else {
      const decoded: any = jwtDecode(data.payload.token);
      console.log(decoded);
      cookies.set("token", data.payload.token, {
        expires: new Date(decoded.exp * 1000),
      });
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "stas@mail.ru",
      password: "1234ASD",
    },
    mode: "onChange",
  });
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h3 className="text-center">Авторизация</h3>
      <div className="container w-25">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-1 p-2">
            <label className="form-label" htmlFor="loginInput">
              Логин
            </label>

            <input
              type="email"
              className="form-control"
              id="loginInput"
              {...register("email", { required: "Укажите Ваш E-mail" })}
              placeholder="E-mail"
              required
              autoFocus
            />
          </div>

          <div className="form-group mb-2 p-2">
            <label className="form-label" htmlFor="passwordInput">
              Пароль
            </label>
            <input
              type="text"
              className="form-control"
              id="passwordInput"
              {...register("password", { required: "Укажите Ваш пароль" })}
              placeholder="Пароль"
              required
            />
          </div>
          <div className="form-group mb-2 p-2">
            <button type="submit" className="btn btn-primary">
              Войти
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
