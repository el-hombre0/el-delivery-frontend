import * as React from "react";
type MyProps = {
  onLogin: any;
  onRegister: any;
};

type MyState = {
  active: string;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  onLogin: any;
  onRegister: any;
  [key: string]: any;

};

// interface IState {
//   [key: string]: any;
// }

export default class LoginForm extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      active: "login",
      firstName: "",
      lastName: "",
      login: "",
      password: "",

      // Флаги для скрытия формы после авторизации
      onLogin: props.onLogin,
      onRegister: props.onRegister,
    };
  }

  // Обработчик изменений в полях формы
  onChangeHandler = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    // const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitLogin = (e: any) => {
    this.state.onLogin(e, this.state.login, this.state.password);
  };

  onSubmitRegister = (e: any) => {
    this.state.onRegister(
      e,
      this.state.firstName,
      this.state.lastName,
      this.state.login,
      this.state.password
    );
  };

  render() {
    return (
      <>
        <h3 className="text-center">Авторизация</h3>
        <div className="container mw-25">
          <form onSubmit={this.onSubmitLogin}>
            <div className="form-group mb-1 p-2">
              <label className="form-label" htmlFor="loginInput">Логин</label>

              <input
                type="text"
                className="form-control"
                id="loginInput"
                placeholder="E-mail/номер телефона"
                required
                autoFocus
                onChange={this.onChangeHandler}
              />
            </div>

            <div className="form-group mb-2 p-2">
              <label className="form-label" htmlFor="passwordInput">Пароль</label>
              <input
                type="text"
                className="form-control"
                id="passwordInput"
                placeholder="Пароль"
                required
                onChange={this.onChangeHandler}

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
  }
}
