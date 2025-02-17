import { useOffersContext } from "../../../../../hooks/useOffersContext";
import { VacancyListItem } from "../vacancy-list-item/vacancy-list-item";

export function VacancyList() {
  const { state } = useOffersContext();
  return (
    <ul className="vacancy__list">
      {state.offers.map((offer) => {
        return <VacancyListItem offer={offer} key={offer.id} />;
      })}
    </ul>
  );
}
