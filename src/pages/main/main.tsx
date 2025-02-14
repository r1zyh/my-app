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
                <h2 className="vacancy__inner--title">Backend-разработчик</h2>
              </article>
            </li>
            <li className="vacancy__list--item">
              <article className="vacancy__inner">
                <h2 className="vacancy__inner--title">Backend-разработчик</h2>
              </article>
            </li>
            <li className="vacancy__list--item">
              <article className="vacancy__inner">
                <h2 className="vacancy__inner--title">Backend-разработчик</h2>
              </article>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
