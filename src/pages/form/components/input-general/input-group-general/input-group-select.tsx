import { useFormikContext } from "formik";

export function InputGroupSelect() {
  const { values, setFieldValue, errors, touched } = useFormikContext<{
    openDate: string;
    closeDate: string;
  }>();

  return (
    <fieldset className="input__group date">
      <div className="input__item">
        <label htmlFor="open" className="input__label">
          Дата открытия
          <span className="required__star">*</span>
        </label>
        <div className="custom__date">
          <input
            type="date"
            className={`input__field input__date ${
              values.openDate === "" ? "placeholder" : ""
            }`}
            id="open"
            name="openDate"
            value={values.openDate ? values.openDate.slice(0, 10) : ""}
            onChange={(e) => setFieldValue("openDate", e.target.value)}
          />
        </div>
        {touched.openDate && errors.openDate && (
          <div className="error__message">{errors.openDate}</div>
        )}
      </div>

      <div className="input__item">
        <label htmlFor="close" className="input__label">
          Плановая дата закрытия
          <span className="required__star">*</span>
        </label>
        <div className="custom__date">
          <input
            type="date"
            className={`input__field input__date ${
              values.closeDate === "" ? "placeholder" : ""
            }`}
            id="close"
            name="closeDate"
            value={values.closeDate ? values.closeDate.slice(0, 10) : ""}
            onChange={(e) => setFieldValue("closeDate", e.target.value)}
          />
        </div>
        {touched.closeDate && errors.closeDate && (
          <div className="error__message">{errors.closeDate}</div>
        )}
      </div>
    </fieldset>
  );
}
