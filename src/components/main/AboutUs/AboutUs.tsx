import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <h1>Про нас</h1>

      <section className="about-section">
        <h2>Чому ця платформа важлива?</h2>
        <p>
          Волонтерська допомога – це те, що наближає перемогу. Але чим більше
          людей і організацій залучено, тим складніше координувати роботу,
          розподіляти ресурси та забезпечувати прозорість.
        </p>
        <p>
          Ця платформа була створена, щоб організувати зручну та ефективну
          комунікацію між волонтерами, фондами та військовими підрозділами.
        </p>
      </section>

      <section className="about-section">
        <h2>Основна задача</h2>
        <p>
          Допомогти волонтерам та військовим швидко знаходити один одного,
          уникати бюрократії та працювати максимально ефективно.
        </p>
        <ul>
          <li>
            <strong>✅ Волонтерам та фондам:</strong> <br />
            Організовувати збори, звітувати про витрати та забезпечувати
            прозорість допомоги.
          </li>
          <li>
            <br />
            <strong>✅ Військовим підрозділам:</strong> <br />
            Надсилати запити на необхідну допомогу та отримувати підтримку від
            перевірених джерел.
          </li>
          <li>
            <br />
            <strong>✅ Контролювати рух коштів та ресурсів,</strong>{" "}
            забезпечуючи чесність і відкритість.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Чому нам можна довіряти?</h2>
        <ul className="trust-ul">
          <li>
            <strong>🔹 Прозорість:</strong> кожен збір, транзакція та передача
            допомоги прив'язана до конкретних військових. Вона фіксується і може
            бути перевірена.
          </li>
          <li>
            <strong>🔹 Безпека:</strong> верифікація як волонтерських
            організацій, так і військових підрозділів.
          </li>
          <li>
            <strong>🔹 Зручність:</strong> сучасний інструмент для ефективної
            взаємодії без зайвої бюрократії.
          </li>
        </ul>
        <p>
          Якщо ви хочете допомагати або потребуєте допомоги – наша платформа
          створена, щоб об'єднати вас!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
