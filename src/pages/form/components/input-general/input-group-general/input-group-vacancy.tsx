import { useFormikContext } from "formik";
import { InputWithError } from "../../../../../components/error/error";
import { TOffer } from "../../../../../state/type";

export function InputGroupVacancy() {
  const { values, handleChange, errors, touched } = useFormikContext<TOffer>();

  return (
    <fieldset className="input__group vacancy">
      <div className="input__item">
        <label htmlFor="position" className="input__label">
          Наименование должности
        </label>
        <InputWithError
          id="position"
          name="jobTitle"
          value={values.jobTitle}
          onChange={handleChange}
          error={touched.jobTitle && errors.jobTitle}
          className="input__field"
        />
      </div>
      <div className="input__item">
        <label htmlFor="vacancy" className="input__label">
          Наименование вакансии
        </label>
        <InputWithError
          id="vacancy"
          name="vacancyName"
          value={values.vacancyName}
          onChange={handleChange}
          error={touched.vacancyName && errors.vacancyName}
          className="input__field"
        />
      </div>
      <div className="input__item">
        <label htmlFor="department" className="input__label">
          Отдел
        </label>
        <InputWithError
          id="department"
          name="department"
          value={values.department}
          onChange={handleChange}
          error={touched.department && errors.department}
          className="input__field"
        />
      </div>
    </fieldset>
  );
}
