export function InputGroupLocation() {
  return (
    <fieldset className="input__group conditions location">
      <div className="input__item conditions">
        <label htmlFor="region" className="input__label">
          Регион
        </label>
        <input
          type="text"
          className="input__field conditions"
          id="region"
          name="region-name"
        />
      </div>
      <div className="input__item conditions address">
        <label htmlFor="address" className="input__label">
          Адрес
        </label>
        <input
          type="text"
          className="input__field conditions"
          id="address"
          name="address-name"
        />
      </div>
      <div className="input__item conditions">
        <label htmlFor="metro" className="input__label">
          Станция метро, МЦД
        </label>
        <input
          type="text"
          className="input__field conditions"
          id="metro"
          name="metro-name"
        />
      </div>
    </fieldset>
  );
}
