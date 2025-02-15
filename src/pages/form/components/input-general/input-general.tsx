import {
  InputGroupRadio,
  InputGroupSelect,
  InputGroupVacancy,
} from "./input-group";

export function InputGeneral() {
  return (
    <div className="input__container general">
      <InputGroupVacancy />
      <InputGroupSelect />
      <InputGroupRadio />
    </div>
  );
}
