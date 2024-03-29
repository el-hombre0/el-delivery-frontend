import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsAuth, selectUserData } from "../../redux/slices/auth";
import { logout } from "../../redux/slices/auth";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import Cookies from "universal-cookie";

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(selectUserData);
  console.log(userData);
  // const userName = useSelector((state: any) => {
  //   state.auth.data.firstName;
  // });
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const onClickLogout = () => {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      dispatch(logout());
      cookies.remove("token");
    }
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
                <Link to="/" className="nav-link active" aria-current="page">
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className="nav-link">
                  Особенности
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link">
                  Цены
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faqs" className="nav-link">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  О нас
                </Link>
              </li>
              {isAuth && userData.role !== "USER" ? (
                <li>
                  <Link to="/orders" className="nav-link">
                    Заказы
                  </Link>
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
                  <Link to="/login" className="nav-link">
                    Войти
                  </Link>
                </button>
                <button type="button" className="btn btn-primary">
                  <Link to="/register" className="nav-link">
                    Зарегистрироваться
                  </Link>
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
