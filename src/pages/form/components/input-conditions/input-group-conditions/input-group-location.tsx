import { useFormikContext } from "formik";
import { TOffer } from "../../../../../state/type";

export function InputGroupLocation() {
  const { values, setFieldValue } = useFormikContext<TOffer>();

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValue(field, e.target.value);
    };

  return (
    <fieldset className="input__group conditions location">
      <div className="input__item conditions">
        <label htmlFor="region" className="input__label">
          Регион
        </label>
        <input
          type="text"
          className="input__field conditions"
          id="region"
          name="region"
          value={values.region}
          onChange={handleInputChange("region")}
        />
      </div>
      <div className="input__item conditions address">
        <label htmlFor="address" className="input__label">
          Адрес
        </label>
        <input
          type="text"
          className="input__field conditions"
          id="address"
          name="address"
          value={values.address}
          onChange={handleInputChange("address")}
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
