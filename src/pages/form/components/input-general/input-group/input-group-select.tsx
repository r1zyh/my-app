export function InputGroupSelect() {
  return (
    <div className="input__group date">
      <div className="input__item">
        <label htmlFor="open-date" className="input__label">
          Дата открытия
        </label>
        <div className="custom__date">
          <input
            type="date"
            className="input__field input__date"
            id="open-date"
          />
        </div>
      </div>
      <div className="input__item">
        <label htmlFor="close-date" className="input__label">
          Плановая дата закрытия
        </label>
        <div className="custom__date">
          <input
            type="date"
            className="input__field input__date"
            id="close-date"
          />
        </div>
      </div>
    </div>
  );
}
