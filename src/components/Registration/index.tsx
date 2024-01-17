export const Registration = () => {
  return (
    <>
      <h3 className="text-center">Регистрация</h3>
      <div className="container w-25">
        <form >
          <div className="form-group mb-1 p-2">
            <label className="form-label" htmlFor="nameInput">
              Имя
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Имя"
              required
              autoFocus
            />
          </div>

          <div className="form-group mb-1 p-2">
            <label className="form-label" htmlFor="nameInput">
              Фамилия
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Имя"
              required
              autoFocus
            />
          </div>

          <div className="form-group mb-1 p-2">
            <label className="form-label" htmlFor="loginInput">
              Логин
            </label>

            <input
              type="text"
              className="form-control"
              id="loginInput"
              placeholder="E-mail"
              required
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
              placeholder="Пароль"
              required
            />
          </div>
          <div className="form-group mb-2 p-2">
            <button type="submit" className="btn btn-primary">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
