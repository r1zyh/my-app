import { VacancyListItem } from "../vacancy-list-item/vacancy-list-item";
import offers from "../../../../../mock/data.json";

export function VacancyList() {
  return (
    <ul className="vacancy__list">
      {offers.map((offer) => {
        return <VacancyListItem offer={offer} key={offer.id} />;
      })}
    </ul>
  );
}
