type TVacancyHeader = {
  data: string;
};

export function VacancyHeader({ data }: TVacancyHeader) {
  return (
    <div className="vacancy__header">
      <span className="vacancy__date">{data}</span>
      <button className="vacancy__edit">
        <img
          src="/src/assets/icons/Edit.svg"
          alt="кнопка редактировать"
          className="vacancy__edit--icon"
        />
      </button>
    </div>
  );
}
