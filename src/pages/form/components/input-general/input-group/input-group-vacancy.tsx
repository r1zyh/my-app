export function InputGroupVacancy() {
  return (
    <div className="input__group vacancy">
      <div className="input__item">
        <label htmlFor="position-name" className="input__label">
          Наименование должности
        </label>
        <input type="text" className="input__field" id="position-name" />
      </div>
      <div className="input__item">
        <label htmlFor="vacancy-name" className="input__label">
          Наименование вакансии
        </label>
        <input type="text" className="input__field" id="vacancy-name" />
      </div>
      <div className="input__item">
        <label htmlFor="department-name" className="input__label">
          Отдел
        </label>
        <input type="text" className="input__field" id="department-name" />
      </div>
    </div>
  );
}
