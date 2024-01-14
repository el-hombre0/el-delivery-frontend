export const Header = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
            <span className="fs-4">El-Delivery</span>
          </a>

          <nav>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  Главная
                </a>
              </li>
              <li className="nav-item">
                <a href="/features" className="nav-link">
                  Особенности
                </a>
              </li>
              <li className="nav-item">
                <a href="/pricing" className="nav-link">
                  Цены
                </a>
              </li>
              <li className="nav-item">
                <a href="/faqs" className="nav-link">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  О нас
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              <a href="/login" className="nav-link">
                Войти
              </a>
            </button>
            <button type="button" className="btn btn-primary">
              <a href="/register" className="nav-link">
                Зарегистрироваться
              </a>
            </button>
          </div>
        </header>
      </div>
    </>
  );
};
