import { JSX } from "react";

export function VacancyHeader(): JSX.Element {
  return (
    <div className="vacancy__header">
      <span className="vacancy__date">Дата публикации: 23.01.2023</span>
      <button className="vacancy__edit">
        <img
          src="/src/assets/icons/Edit.svg.svg"
          alt="кнопка редактировать"
          className="vacancy__edit--icon"
        />
      </button>
    </div>
  );
}
