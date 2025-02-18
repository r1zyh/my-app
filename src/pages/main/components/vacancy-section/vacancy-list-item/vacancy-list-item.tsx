import { formatDate } from "../../../../../const";
import { TOffer } from "../../../../../state/type";
import { VacancyHeader } from "./vacancy-header";
import { VacancyInfo } from "./vacancy-info/vacancy-info";

type TVacancyListItem = {
  offer: TOffer;
};

export function VacancyListItem({ offer }: TVacancyListItem) {
  const { vacancyName, openDate, address, experience, salaryFromTo } = offer;
  return (
    <li className="vacancy__list--item">
      <article className="vacancy__inner">
        <VacancyHeader data={`Дата публикации: ${formatDate(openDate)}`} />
        <h2 className="vacancy__inner--title">{vacancyName}</h2>

        <div className="vacancy__location">
          <img
            src="/src/assets/icons/MapPin.svg"
            alt="иконка адрес"
            className="vacancy__location--icon"
          />
          <span className="vacancy__address">{address}</span>

          <VacancyInfo
            salary={salaryFromTo}
            experienceRequirements={experience}
            address={address}
          />
        </div>
      </article>
    </li>
  );
}
