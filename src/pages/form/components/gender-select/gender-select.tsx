import { useFormikContext } from "formik";
import { TOffer } from "../../../../state/type";
import { InputWithError } from "../../../../components/errors";
import RadioButtonIcon from '/src/assets/icons/Radiobutton.svg';


export function GenderSelect() {
  const { values, setFieldValue, touched, errors } = useFormikContext<TOffer>();
  const genderError = touched.gender && errors.gender;

  return (
    <div className="input__item radio">
      <label className="input__label">
        Пол <span className="required__star">*</span>
      </label>
      <div className="radio__container gender">
        <label className="radio__option gender" htmlFor="male">
          <InputWithError
            type="radio"
            name="gender"
            id="male"
            value="мужской"
            checked={values.gender === "мужской"}
            onChange={() => setFieldValue("gender", "мужской")}
          />
          <span className="custom__radio">
            {values.gender === "мужской" && (
              <img src={RadioButtonIcon} alt="выбрано" />
            )}
          </span>
          Мужской
        </label>
        <label className="radio__option gender" htmlFor="female">
          <InputWithError
            type="radio"
            name="gender"
            id="female"
            value="женский"
            checked={values.gender === "женский"}
            onChange={() => setFieldValue("gender", "женский")}
          />
          <span className="custom__radio">
            {values.gender === "женский" && (
              <img src={RadioButtonIcon} alt="выбрано" />
            )}
          </span>
          Женский
        </label>
      </div>
      {genderError && (
        <div className="error__message gender">{genderError}</div>
      )}
    </div>
  );
}
