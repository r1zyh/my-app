import { JSX } from "react";

export function VacancyInfo(): JSX.Element {
  return (
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
            src="/src/assets/icons/Metro.svg"
            alt="метро"
            className="vacancy__metro-icon"
          />
          <span className="vacancy__metro--text">
            Сходненская, Трикотажная и Волоколамская
          </span>
        </div>
      </div>
    </div>
  );
}
