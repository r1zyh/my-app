import { ChangeEvent } from "react";
import { useFormikContext } from "formik";
import { GenderSelect } from "../../gender-select";
import { TOffer } from "../../../../../state/type";
import { SelectWithError } from "../../../../../components/errors";

export function InputGroupRadio() {
  const { values, setFieldValue, touched, errors } = useFormikContext<TOffer>();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFieldValue("education", value);
  };

  return (
    <div className="input__group radio">
      <GenderSelect />
      <div className="input__item">
        <label htmlFor="education" className="input__label">
          Образование
          <span className="required__star">*</span>
        </label>

        <SelectWithError
          className={`input__field select ${
            values.education === "" ? "placeholder" : ""
          }`}
          id="education"
          value={values.education}
          onChange={handleSelectChange}
          name="education"
          title="education"
          error={touched.education && errors.education}
        >
          <option value="" hidden>
            Выберите
          </option>
          <option value="secondary">Среднее</option>
          <option value="higher">Высшее</option>
        </SelectWithError>
      </div>
    </div>
  );
}
