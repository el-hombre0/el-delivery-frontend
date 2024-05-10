import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="bottom ">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link px-2 text-body-secondary">
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/features"
                className="nav-link px-2 text-body-secondary"
              >
                Особенности
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pricing"
                className="nav-link px-2 text-body-secondary"
              >
                Цены
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faqs" className="nav-link px-2 text-body-secondary">
                FAQs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link px-2 text-body-secondary"
              >
                О нас
              </NavLink>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            © 2024 El-Delivery, Efimtsev S.M.
          </p>
        </footer>
      </div>
    </>
  );
};
