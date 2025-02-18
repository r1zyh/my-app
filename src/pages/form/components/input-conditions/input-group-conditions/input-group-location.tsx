import { useFormikContext } from "formik";
import { TOffer } from "../../../../../state/type";
import { InputWithError } from "../../../../../components/errors/input-with-error";

export function InputGroupLocation() {
  const { values, setFieldValue, errors, touched } = useFormikContext<TOffer>();

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValue(field, e.target.value);
    };

  return (
    <fieldset className="input__group conditions location">
      <div className="input__item conditions">
        <label htmlFor="region" className="input__label">
          Регион
          <span className="required__star">*</span>
        </label>
        <InputWithError
          id="region"
          name="region"
          value={values.region}
          onChange={handleInputChange("region")}
          error={touched.region && errors.region}
          className="input__field conditions"
        />
      </div>
      <div className="input__item conditions address">
        <label htmlFor="address" className="input__label">
          Адрес
          <span className="required__star">*</span>
        </label>
        <InputWithError
          id="address"
          name="address"
          value={values.address}
          onChange={handleInputChange("address")}
          error={touched.address && errors.address}
          className="input__field conditions"
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
          name="metro"
          value={values.metro}
          onChange={handleInputChange("metro")}
        />
      </div>
    </fieldset>
  );
}
