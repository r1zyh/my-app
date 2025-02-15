import { InputGroupLocation, InputRadioConditions } from "./input-group";

export function InputConditions() {
  return (
    <div className="input__container conditions">
      <fieldset className="input__group conditions salary">
        <div className="input__item radio">
          <label className="input__label">Зарплата</label>
          <div className="radio__container salary">
            <label className="radio__option salary" htmlFor="hands-salary">
              <input
                type="radio"
                name="salary-before"
                id="hands-salary"
                value="hands-salary"
              />
              <span className="custom__radio">
                {/* {selected === "male" && (
                  <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
                )} */}
              </span>
              На руки
            </label>
            <label className="radio__option salary" htmlFor="bills-salary">
              <input
                type="radio"
                name="salary-after"
                id="bills-salary"
                value="bills-salary"
              />
              <span className="custom__radio">
                {/* {selectedGender === "female" && (
                  <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
                )} */}
              </span>
              До вычета налогов
            </label>
          </div>
        </div>

        <div className="input__group salary">
          <div className="input__item salary">
            <label
              htmlFor="salary"
              className="input__label salary visually-hidden"
            >
              от
            </label>
            от
            <input
              type="text"
              className="input__field salary"
              name="salary-before"
              id="salary"
            />
          </div>
          <div className="input__item salary">
            <label
              htmlFor="salary"
              className="input__label salary visually-hidden"
            >
              до
            </label>
            до
            <input
              type="text"
              className="input__field salary"
              name="salary-after"
              id="bill-salary"
            />
          </div>
        </div>
      </fieldset>
      <InputGroupLocation />
      <InputRadioConditions />
    </div>
  );
}
