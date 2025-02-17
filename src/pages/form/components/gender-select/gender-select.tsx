import { useFormikContext } from "formik";
import { TOffer } from "../../../../state/type";

export function GenderSelect() {
  const { values, setFieldValue } = useFormikContext<TOffer>();

  return (
    <div className="input__item radio">
      <label className="input__label">Пол</label>
      <div className="radio__container gender">
        <label className="radio__option gender" htmlFor="male">
          <input
            type="radio"
            name="gender"
            id="male"
            value="мужской"
            checked={values.gender === "мужской"}
            onChange={() => setFieldValue("gender", "мужской")}
          />
          <span className="custom__radio">
            {values.gender === "мужской" && (
              <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
            )}
          </span>
          Мужской
        </label>
        <label className="radio__option gender" htmlFor="female">
          <input
            type="radio"
            name="gender"
            id="female"
            value="женский"
            checked={values.gender === "женский"}
            onChange={() => setFieldValue("gender", "женский")}
          />
          <span className="custom__radio">
            {values.gender === "женский" && (
              <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
            )}
          </span>
          Женский
        </label>
      </div>
    </div>
  );
}
