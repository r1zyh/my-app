import MetroIcon from "/src/assets/icons/Metro.svg";

type TVacancyInfo = {
  salary?: {
    from: string;
    to: string;
  };
  experienceRequirements: string;
  // {
  //   from: string;
  //   to: string;
  // };
  address: string;
};

export function VacancyInfo({
  salary,
  experienceRequirements,
  address,
}: TVacancyInfo) {
  return (
    <div className="vacancy__info">
      <div className="vacancy__details">
        <span className="vacancy__salary">
          <strong>от {salary?.from}</strong>{" "}
          <span className="vacancy__text">на руки</span>
        </span>
        <span className="vacancy__experience">
          <span className="vacancy__text">Требуемый опыт:</span>
          <strong>
            от {Number.parseInt(experienceRequirements)} до{" "}
            {Number.parseInt(experienceRequirements)} лет
          </strong>
        </span>

        <div className="vacancy__metro">
          <img src={MetroIcon} alt="метро" className="vacancy__metro-icon" />
          <span className="vacancy__metro--text">{address}</span>
        </div>
      </div>
    </div>
  );
}
