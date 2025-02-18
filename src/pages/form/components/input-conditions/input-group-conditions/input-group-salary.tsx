import { useFormikContext } from "formik";
import { TOffer } from "../../../../../state/type";
import RadioButtonIcon from "/src/assets/icons/Radiobutton.svg";
export function InputGroupSalary() {
  const { values, setFieldValue } = useFormikContext<TOffer>();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, e.target.value);
  };

  const handleSalaryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = e.target.value;
    setFieldValue(`salaryFromTo.${field}`, value);
  };

  return (
    <fieldset className="input__group conditions salary">
      <div className="input__item radio">
        <label className="input__label">Зарплата</label>
        <div className="radio__container salary">
          <label className="radio__option salary" htmlFor="hands-salary">
            <input
              type="radio"
              name="handsOrBills"
              id="hands-salary"
              value="hands"
              checked={values.handsOrBills === "hands"}
              onChange={handleRadioChange}
            />
            <span className="custom__radio">
              {values.handsOrBills === "hands" && (
                <img src={RadioButtonIcon} alt="выбрано" />
              )}
            </span>
            На руки
          </label>
          <label className="radio__option salary" htmlFor="bills-salary">
            <input
              type="radio"
              name="handsOrBills"
              id="bills-salary"
              value="bills"
              checked={values.handsOrBills === "bills"}
              onChange={handleRadioChange}
            />
            <span className="custom__radio">
              {values.handsOrBills === "bills" && (
                <img src={RadioButtonIcon} alt="выбрано" />
              )}
            </span>
            До вычета налогов
          </label>
        </div>
      </div>

      <div className="input__group salary">
        <div className="input__item salary">
          <label
            htmlFor="salary-before"
            className="input__label salary visually-hidden"
          >
            от
          </label>
          от
          <input
            type="text"
            className="input__field salary"
            name="salaryFrom"
            id="salary-before"
            value={values.salaryFromTo?.from || ""}
            onChange={(e) => handleSalaryChange(e, "from")}
          />
        </div>
        <div className="input__item salary">
          <label
            htmlFor="salary-after"
            className="input__label salary visually-hidden"
          >
            до
          </label>
          до
          <input
            type="text"
            className="input__field salary"
            name="salaryTo"
            id="salary-after"
            value={values.salaryFromTo?.to || ""}
            onChange={(e) => handleSalaryChange(e, "to")}
          />
        </div>
      </div>
    </fieldset>
  );
}
