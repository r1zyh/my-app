export function InputGroupVacancy() {
  return (
    <fieldset className="input__group vacancy">
      <div className="input__item">
        <label htmlFor="position" className="input__label">
          Наименование должности
        </label>
        <input type="text" className="input__field" id="position" name="position-name"/>
      </div>
      <div className="input__item">
        <label htmlFor="vacancy" className="input__label">
          Наименование вакансии
        </label>
        <input type="text" className="input__field" id="vacancy" name="vacancy-name" />
      </div>
      <div className="input__item">
        <label htmlFor="department" className="input__label">
          Отдел
        </label>
        <input type="text" className="input__field" id="department" name="department-name"/>
      </div>
    </fieldset>
  );
}
