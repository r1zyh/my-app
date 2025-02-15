
export function VacancyHeader() {
  return (
    <div className="vacancy__header">
      <span className="vacancy__date">Дата публикации: 23.01.2023</span>
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
