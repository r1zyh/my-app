import { InputGroupLocation, InputGroupSalary, InputRadioConditions } from "./input-group-conditions";

export function InputConditions() {
  return (
    <div className="input__container conditions">
      <InputGroupSalary />
      <InputGroupLocation />
      <InputRadioConditions />
    </div>
  );
}
