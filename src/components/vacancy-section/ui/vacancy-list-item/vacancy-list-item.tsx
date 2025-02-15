import { JSX } from "react";
import { VacancyHeader } from "./ui/vacancy-header";
import { VacancyInfo } from "./ui/vacancy-info";

export function VacancyListItem(): JSX.Element {
  return (
    <li className="vacancy__list--item">
      <article className="vacancy__inner">
        <VacancyHeader />
        <h2 className="vacancy__inner--title">Backend-разработчик</h2>

        <div className="vacancy__location">
          <img
            src="/src/assets/icons/Map Pin ФКУ Налог-Сервис адрес.svg"
            alt="иконка адрес"
            className="vacancy__location--icon"
          />
          <span className="vacancy__address">Москва, Походный проезд, 3с1</span>

          <VacancyInfo />
        </div>
      </article>
    </li>
  );
}
