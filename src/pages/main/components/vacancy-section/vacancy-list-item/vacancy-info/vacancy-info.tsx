type TVacancyInfo = {
  salary: string;
  experienceRequirements: {
    from: string;
    to: string;
  };
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
          <strong>от {salary}</strong>{" "}
          <span className="vacancy__text">на руки</span>
        </span>
        <span className="vacancy__experience">
          <span className="vacancy__text">Требуемый опыт:</span>
          <strong>
            от {experienceRequirements.from} до {experienceRequirements.to} лет
          </strong>
        </span>

        <div className="vacancy__metro">
          <img
            src="/src/assets/icons/Metro.svg"
            alt="метро"
            className="vacancy__metro-icon"
          />
          <span className="vacancy__metro--text">{address}</span>
        </div>
      </div>
    </div>
  );
}
