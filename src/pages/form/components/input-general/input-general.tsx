import {
  InputGroupRadio,
  InputGroupSelect,
  InputGroupVacancy,
} from "./input-group-general";

export function InputGeneral() {
  return (
    <div className="input__container general">
      <InputGroupVacancy />
      <InputGroupSelect />
      <InputGroupRadio />
    </div>
  );
}
