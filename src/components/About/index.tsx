export const About = () => {
  return (
<div className="container">
    <h1 className="text-center">О нас</h1>
    <div className="row">
        <div className="col-lg-5">
            <img src="./pictures/mobile_charging_station.jpg" className="img-fluid" alt="Мобильная зарядная станция" width={512}></img>
        </div>
        <div>
        <p>
        В современном мире все больше автолюбителей переходят с использования
        бензиновых и дизельных автомобилей на электромобили. Это обусловлено
        множеством электротранспорта и причин, заканчивая начиная сэкологичности
        инновационнымитехнологиями, применяющимися в их производстве.
      </p>
      <p>
        Из-за резкого роста количества электромобилей существует нехватка
        инфраструктуры – стационарных зарядных станций. Они присутствуют в
        некотором количестве в крупных городах, однако за городом их количество
        резко снижается.
      </p>
      <p>
        Таким образом, автомобилист, не рассчитавший расход заряда батареи
        своего электромобиля, может попасть в неприятную ситуацию, когда в пути
        между городами у него разрядится аккумулятор.
      </p>
      <p>
        В подобных случаях отличным решением будет вызвать мобильную зарядную
        станцию (МЗС), которая приедет на место остановки и за относительно
        небольшое время подзарядит аккумулятор электромобиля, чтобы он мог
        добраться до стационарной зарядной станции и уже полностью зарядиться от
        неё.
      </p>
        </div>
    </div>

</div>
  );
};
