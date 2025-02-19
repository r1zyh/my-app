import { formatDate } from "../../../../../const";
import { TOffer } from "../../../../../state/type";
import { VacancyHeader } from "./vacancy-header";
import { VacancyInfo } from "./vacancy-info/vacancy-info";
import MapPinIcon from "/src/assets/icons/MapPin.svg";

type TVacancyListItem = {
  offer: TOffer;
};

export function VacancyListItem({ offer }: TVacancyListItem) {
  const {
    vacancyName,
    openDate,
    address,
    metro,
    experience,
    salaryFromTo,
    id,
  } = offer;
  if (!id) throw new Error("Нет id !!");
  return (
    <li className="vacancy__list--item">
      <article className="vacancy__inner">
        <VacancyHeader
          data={`Дата публикации: ${formatDate(openDate)}`}
          offerId={id}
        />
        <h2 className="vacancy__inner--title">{vacancyName}</h2>

        <div className="vacancy__location">
          <img
            src={MapPinIcon}
            alt="иконка адрес"
            className="vacancy__location--icon"
          />
          <span className="vacancy__address">{address}</span>

          <VacancyInfo
            salary={salaryFromTo}
            experienceRequirements={experience}
            metro={metro}
          />
        </div>
      </article>
    </li>
  );
}
