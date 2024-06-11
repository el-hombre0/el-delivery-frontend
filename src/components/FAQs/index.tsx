import { Link } from "react-router-dom";

export const Faqs = () => {
  return (
    <div className="container">
      <h1 className="text-center">Часто задаваемые вопросы</h1>
      <div>
        <p>
          Клиенты, обращающиеся к сервису по вызову мобильной зарядной станции
          для электромобилей, могут задавать следующие часто встречающиеся
          вопросы:
        </p>
        <ol>
          <li>
            <p>
              Стоимость услуги: Сколько будет стоить вызов мобильной зарядной
              станции и какие факторы влияют на окончательную цену?
            </p>
            <p>
              <em>
                Стоимость складывается из многих факторов, подробнее смотрите
                раздел Цены. Наши цены начинаются от 2000 рублей.
              </em>
            </p>
          </li>
          <li>
            <p>
              Время ожидания: Сколько времени потребуется для прибытия мобильной
              зарядной станции на место и начала процесса зарядки?
            </p>
            <p>
              <em>Время прибытия МЗС от 25 минут.</em>
            </p>
          </li>
          <li>
            <p>
              Доступность услуги: Где доступны услуги вызова мобильной зарядной
              станции и как далеко специалисты могут выехать?
            </p>
            <p>
              {" "}
              <em>
                Выезд мобильной зарядной станции доступен по всей Москве и
                Московской области.
              </em>
            </p>
          </li>
          <li>
            <p>
              Технические детали: Какой тип зарядных устройств используется, как
              быстро можно зарядить аккумулятор, и какие электромобили
              поддерживаются?
            </p>
            <p>
              <em>
                Поддерживаются порты CCS2, GB/T DC, CHAdeMO. Время полной
                зарядки зависит от марки электромобиля, состояния батареи и
                способности контроллера электромобиля принять DC 30 кВт.
                Заряжаем электромобили Tesla, Zeekr, Volkswagen, Evolute,
                Nissan, Москвич.
              </em>
            </p>
          </li>
          <li>
            <p>
              Методы оплаты: Какие методы оплаты принимаются за услуги вызова
              мобильной зарядной станции?
            </p>
            <p>
              <em>
                Оплата наличными или банковской картой через переносной
                терминал.
              </em>
            </p>
          </li>
          <li>
            <p>
              Безопасность: Как обеспечивается безопасность процесса зарядки и
              клиентов во время обслуживания?
            </p>
            <p>
              <em>
                Зарядка осуществляется в соответствии с Правилами дорожного
                движения Российской Федерации.
              </em>
            </p>
          </li>
          <li>
            <p>
              Гарантии и сервисная поддержка: Есть ли гарантии на
              предоставляемые услуги, и как обеспечивается сервисная поддержка
              после завершения зарядки?
            </p>
            <p>
              <em>
                Возмездная гарантия предоставляется в случае технической
                неисправлности аккумуляторной батареи с момента окончания
                процесса зарядки аккамулятора электромобиля и составляет
                временной отрезок до следующей зарядки аккумуляторной батареи
                электромобиля.
              </em>
            </p>
          </li>
        </ol>
      </div>
      <p>
        При возникновении дополнительных вопросов можете написать их на
        электронную почту нашим специалистам:{" "}
        <Link to="mailto:evencofr@yandex.ru">evencofr@yandex.ru</Link>
      </p>
    </div>
  );
};
