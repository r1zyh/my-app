import { useFormikContext } from "formik";
import { WorkTypeSelect } from "../../work-type-select";
import { TOffer } from "../../../../../state/type";
import { InputWithError } from "../../../../../components/errors/input-with-error";
import { SelectWithError } from "../../../../../components/errors";

export function InputRadioConditions() {
  const { values, setFieldValue, touched, errors } = useFormikContext<TOffer>();

  const handleInputChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFieldValue(field, e.target.value);
    };

  return (
    <div className="input__group radio conditions">
      <div className="input__item">
        <label htmlFor="experience" className="input__label">
          Опыт работы
        </label>
        <InputWithError
          id="experience"
          name="experience"
          value={values.experience}
          onChange={handleInputChange("experience")}
          error={touched.experience && errors.experience}
          className="input__field"
        />
      </div>
      <div className="input__item">
        <label htmlFor="work-schedule" className="input__label">
          График работы
          <span className="required__star">*</span>
        </label>
        <SelectWithError
          className={`input__field select ${
            values.schedule === "" ? "placeholder" : ""
          }`}
          id="schedule"
          name="schedule"
          value={values.schedule}
          onChange={handleInputChange("schedule")}
          error={touched.schedule && errors.schedule}
        >
          <option value="" hidden>
            Выберите
          </option>
          <option value="full-day">Полный день</option>
          <option value="replaceable 5/2">Сменный 5/2</option>
          <option value="replaceable 2/2">Сменный 2/2</option>
        </SelectWithError>
      </div>
      <WorkTypeSelect />{" "}
    </div>
  );
}
