import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectIsAuth, selectUserData } from "../../redux/slices/auth";
import { logout } from "../../redux/slices/auth";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import Cookies from "universal-cookie";

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(selectUserData);
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const onClickLogout = () => {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      dispatch(logout());
      cookies.remove("token");
    }
  };
  const userWindowLocation = (searchString: string) => {
    const res = window.location.href.search(searchString);
    return res;
  };
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
            <span className="fs-4">El-Delivery</span>
          </Link>

          <nav>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Главная
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/features" className="nav-link">
                  Особенности
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link">
                  Цены
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/faqs" className="nav-link">
                  FAQs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  О нас
                </NavLink>
              </li>
              {isAuth && userData.role !== "USER" ? (
                <li>
                  <NavLink to="/orders" className="nav-link">
                    Все заказы
                  </NavLink>
                </li>
              ) : (
                <></>
              )}
              {isAuth && userData.role === "USER" ? (
                <li>
                  <NavLink to="/myorders" className="nav-link">
                    Мои заказы
                  </NavLink>
                </li>
              ) : (
                <></>
              )}
              {isAuth && userData.role === "ADMIN" ? (
                <li>
                  <NavLink to="/users-list" className="nav-link">
                    Список пользователей
                  </NavLink>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </nav>
          <div className="col-md-3 text-end">
            {!isAuth ? (
              <>
                <button type="button" className="btn btn-outline-primary m-2">
                  <NavLink to="/login" className="nav-link">
                    Войти
                  </NavLink>
                </button>
                <button type="button" className="btn btn-primary">
                  <NavLink to="/register" className="nav-link">
                    Зарегистрироваться
                  </NavLink>
                </button>
              </>
            ) : (
              <>
                <div>
                  Здравствуйте,
                  <button type="button" className="btn btn-light m-2">
                    <Link to="/account">{userData.firstName}</Link>
                  </button>
                </div>

                <button
                  onClick={onClickLogout}
                  type="button"
                  className="btn btn-outline-danger me-2"
                >
                  Выйти
                </button>
              </>
            )}
          </div>
        </header>
      </div>
    </>
  );
};
