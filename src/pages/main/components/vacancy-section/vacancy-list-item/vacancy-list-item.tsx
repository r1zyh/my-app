import { TOffer } from "../../../../../state/type";
import { VacancyHeader } from "./vacancy-header";
import { VacancyInfo } from "./vacancy-info";

type TVacancyListItem = {
  offer: TOffer;
};

export function VacancyListItem({ offer }: TVacancyListItem) {
  const { vacancyName, openDate, salary, address, experienceRequirements } = offer;
  return (
    <li className="vacancy__list--item">
      <article className="vacancy__inner">
        <VacancyHeader data={openDate} />
        <h2 className="vacancy__inner--title">{vacancyName}</h2>

        <div className="vacancy__location">
          <img
            src="/src/assets/icons/MapPin.svg"
            alt="иконка адрес"
            className="vacancy__location--icon"
          />
          <span className="vacancy__address">{address}</span>

          <VacancyInfo salary={salary} experienceRequirements={experienceRequirements} address={address} />
        </div>
      </article>
    </li>
  );
}
