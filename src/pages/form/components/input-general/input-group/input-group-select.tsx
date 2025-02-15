export function InputGroupSelect() {
  return (
    <fieldset className="input__group date">
      <div className="input__item">
        <label htmlFor="open" className="input__label">
          Дата открытия
        </label>
        <div className="custom__date">
          <input
            type="date"
            className="input__field input__date"
            id="open"
            name="open-date"
          />
        </div>
      </div>
      <div className="input__item">
        <label htmlFor="close" className="input__label">
          Плановая дата закрытия
        </label>
        <div className="custom__date">
          <input
            type="date"
            className="input__field input__date"
            id="close"
            name="close-date"
          />
        </div>
      </div>
    </fieldset>
  );
}
