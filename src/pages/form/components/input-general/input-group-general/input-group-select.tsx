import { useFormikContext } from "formik";

export function InputGroupSelect() {
  const { values, setFieldValue, errors, touched } = useFormikContext<{
    open: string;
    close: string;
  }>();

  return (
    <fieldset className="input__group date">
      <div className="input__item">
        <label htmlFor="open" className="input__label">
          Дата открытия
        </label>
        <div className="custom__date">
          <input
            type="date"
            className="input__field input__date"
            id="open"
            name="open"
            value={values.open}
            onChange={(e) => setFieldValue("open", e.target.value)}
          />
        </div>
        {touched.open && errors.open && (
          <div className="error-message">{errors.open}</div>
        )}
      </div>

      <div className="input__item">
        <label htmlFor="close" className="input__label">
          Плановая дата закрытия
        </label>
        <div className="custom__date">
          <input
            type="date"
            className="input__field input__date"
            id="close"
            name="close"
            value={values.close}
            onChange={(e) => setFieldValue("close", e.target.value)}
          />
        </div>
        {touched.close && errors.close && (
          <div className="error-message">{errors.close}</div>
        )}
      </div>
    </fieldset>
  );
}
