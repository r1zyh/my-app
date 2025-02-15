import { JSX } from "react";
import { Header } from "../../components/header/header";

export function Main(): JSX.Element {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="main__title">Заявки на размещение вакансий</h1>
        <section className="vacancy">
          <ul className="vacancy__list">
            <li className="vacancy__list--item">
              <article className="vacancy__inner">
                <div className="vacancy__header">
                  <span className="vacancy__date">
                    Дата публикации: 23.01.2023
                  </span>
                  <button className="vacancy__edit">
                    <img
                      src="/src/assets/icons/Тестовое задание ФКУ Налог-Сервис ред.svg"
                      alt="кнопка редактировать"
                      className="vacancy__edit--icon"
                    />
                  </button>
                </div>
                <h2 className="vacancy__inner--title">Backend-разработчик</h2>

                <div className="vacancy__location">
                  <img
                    src="/src/assets/icons/Map Pin ФКУ Налог-Сервис адрес.svg"
                    alt="иконка адрес"
                    className="vacancy__location--icon"
                  />
                  <span className="vacancy__address">
                    Москва, Походный проезд, 3с1
                  </span>

                  <div className="vacancy__info">
                    <div className="vacancy__details">
                      <span className="vacancy__salary">
                        <strong>от 70 000</strong>{" "}
                        <span className="vacancy__text">на руки</span>
                      </span>
                      <span className="vacancy__experience">
                        <span className="vacancy__text">Требуемый опыт:</span>
                        <strong>от 1 до 3 лет</strong>
                      </span>

                      <div className="vacancy__metro">
                        <img
                          src="/src/assets/icons/Metro Тестовое задание.svg "
                          alt="Метро"
                          className="vacancy__metro-icon"
                        />
                        <span className="vacancy__metro--text">
                          Сходненская, Трикотажная и Волоколамская
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            <li className="vacancy__list--item">
              <article className="vacancy__inner">
                <div className="vacancy__header">
                  <span className="vacancy__date">
                    Дата публикации: 23.01.2023
                  </span>
                  <button className="vacancy__edit">
                    <img
                      src="/src/assets/icons/Тестовое задание ФКУ Налог-Сервис ред.svg"
                      alt="кнопка редактировать"
                      className="vacancy__edit--icon"
                    />
                  </button>
                </div>
                <h2 className="vacancy__inner--title">Backend-разработчик</h2>

                <div className="vacancy__location">
                  <img
                    src="/src/assets/icons/Map Pin ФКУ Налог-Сервис адрес.svg"
                    alt="иконка адрес"
                    className="vacancy__location--icon"
                  />
                  <span className="vacancy__address">
                    Москва, Походный проезд, 3с1
                  </span>

                  <div className="vacancy__info">
                    <div className="vacancy__details">
                      <span className="vacancy__salary">
                        <strong>от 70 000</strong>{" "}
                        <span className="vacancy__text">на руки</span>
                      </span>
                      <span className="vacancy__experience">
                        <span className="vacancy__text">Требуемый опыт:</span>
                        <strong>от 1 до 3 лет</strong>
                      </span>

                      <div className="vacancy__metro">
                        <img
                          src="/src/assets/icons/Metro Тестовое задание.svg "
                          alt="Метро"
                          className="vacancy__metro-icon"
                        />
                        <span className="vacancy__metro--text">
                          Сходненская, Трикотажная и Волоколамская
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            <li className="vacancy__list--item">
              <article className="vacancy__inner">
                <div className="vacancy__header">
                  <span className="vacancy__date">
                    Дата публикации: 23.01.2023
                  </span>
                  <button className="vacancy__edit">
                    <img
                      src="/src/assets/icons/Тестовое задание ФКУ Налог-Сервис ред.svg"
                      alt="кнопка редактировать"
                      className="vacancy__edit--icon"
                    />
                  </button>
                </div>
                <h2 className="vacancy__inner--title">Backend-разработчик</h2>

                <div className="vacancy__location">
                  <img
                    src="/src/assets/icons/Map Pin ФКУ Налог-Сервис адрес.svg"
                    alt="иконка адрес"
                    className="vacancy__location--icon"
                  />
                  <span className="vacancy__address">
                    Москва, Походный проезд, 3с1
                  </span>

                  <div className="vacancy__info">
                    <div className="vacancy__details">
                      <span className="vacancy__salary">
                        <strong>от 70 000</strong>{" "}
                        <span className="vacancy__text">на руки</span>
                      </span>
                      <span className="vacancy__experience">
                        <span className="vacancy__text">Требуемый опыт:</span>
                        <strong>от 1 до 3 лет</strong>
                      </span>

                      <div className="vacancy__metro">
                        <img
                          src="/src/assets/icons/Metro Тестовое задание.svg "
                          alt="Метро"
                          className="vacancy__metro-icon"
                        />
                        <span className="vacancy__metro--text">
                          Сходненская, Трикотажная и Волоколамская
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
