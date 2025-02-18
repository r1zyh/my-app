import { useFormikContext } from "formik";
import { TOffer } from "../../../../state/type";
import { InputWithError } from "../../../../components/errors";

export function WorkTypeSelect() {
  const { values, setFieldValue, touched, errors } = useFormikContext<TOffer>();
  const employmentError = touched.employmentType && errors.employmentType;

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, e.target.value);
  };

  return (
    <div className="input__item radio">
      <label className="input__label">
        Тип занятости <span className="required__star">*</span>
      </label>
      <div className="radio__container work">
        <label className="radio__option work" htmlFor="full-work">
          <InputWithError
            type="radio"
            name="employmentType"
            id="full-work"
            value="full-work"
            checked={values.employmentType === "full-work"}
            onChange={handleRadioChange}
          />
          <span className="custom__radio">
            {values.employmentType === "full-work" && (
              <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
            )}
          </span>
          Полная занятость
        </label>
        <label className="radio__option work" htmlFor="part-work">
          <InputWithError
            type="radio"
            name="employmentType"
            id="part-work"
            value="part-work"
            checked={values.employmentType === "part-work"}
            onChange={handleRadioChange}
          />
          <span className="custom__radio">
            {values.employmentType === "part-work" && (
              <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
            )}
          </span>
          Частичная занятость
        </label>
        <label className="radio__option work" htmlFor="internship">
          <InputWithError
            type="radio"
            name="employmentType"
            id="internship"
            value="internship"
            checked={values.employmentType === "internship"}
            onChange={handleRadioChange}
          />
          <span className="custom__radio">
            {values.employmentType === "internship" && (
              <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
            )}
          </span>
          Стажировка
        </label>
      </div>
      <div className="error__message employment">{employmentError}</div>
    </div>
  );
}
