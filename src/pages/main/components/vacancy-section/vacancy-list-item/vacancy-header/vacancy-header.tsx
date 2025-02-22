import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../../../../../const";
import EditIcon from '/src/assets/icons/Edit.svg';


type TVacancyHeader = {
  data: string;
  offerId: string;
};

export function VacancyHeader({ data, offerId }: TVacancyHeader) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`${AppRoute.Form}/${offerId}`);
  };
  return (
    <div className="vacancy__header">
      <span className="vacancy__date">{data}</span>
      <button type="button" className="vacancy__edit" onClick={handleEditClick}>
        <img
          src={EditIcon}
          alt="кнопка редактировать"
          className="vacancy__edit--icon"
        />
      </button>
    </div>
  );
}
