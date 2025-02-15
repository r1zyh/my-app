import { ChangeEvent, useState } from "react";
import { GenderSelect } from "../../gender-select";

export function InputGroupRadio() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  return (
    <fieldset className="input__group radio">
      <GenderSelect />
      <div className="input__item">
        <label htmlFor="education" className="input-label">
          Образование
        </label>

        <select
          className={`input__field select ${
            selectedValue === "" ? "placeholder" : ""
          }`}
          id="education"
          defaultValue=""
          onChange={handleSelectChange}
          name="candidate-education"
        >
          <option value="" hidden>
            Выберите
          </option>
          <option value="secondary">Среднее</option>
          <option value="secondary-special">Средне-специальное</option>
          <option value="higher">Высшее</option>
        </select>
      </div>
    </fieldset>
  );
}
