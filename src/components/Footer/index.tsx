export const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="bottom ">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-body-secondary">
                Главная
              </a>
            </li>
            <li className="nav-item">
              <a href="/features" className="nav-link px-2 text-body-secondary">
                Особенности
              </a>
            </li>
            <li className="nav-item">
              <a href="/pricing" className="nav-link px-2 text-body-secondary">
                Цены
              </a>
            </li>
            <li className="nav-item">
              <a href="/faqs" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link px-2 text-body-secondary">
                О нас
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2024 El-Delivery, Efimtsev S.M.</p>
        </footer>
      </div>
    </>
  );
};
