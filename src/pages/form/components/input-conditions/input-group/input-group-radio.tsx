import { WorkTypeSelect } from "../../work-type-select";

export function InputRadioConditions() {
  return (
    <div className="input__group radio conditions">
      <div className="input__item">
        <label htmlFor="experience" className="input__label">
          Опыт работы
        </label>
        <input
          type="text"
          className="input__field"
          id="experience"
          name="experience-name"
        />
      </div>
      <div className="input__item">
        <label htmlFor="work-schedule" className="input__label">
          График работы
        </label>

        <select
          className="input__field select placeholder"
          id="schedule"
          defaultValue=""
          name="work-schedule"
          title="work-schedule"
        >
          <option value="" hidden>
            Выберите
          </option>
          <option value="full-day">Полный день</option>
          <option value="replaceable 5/2">Сменный 5/2</option>
          <option value="replaceable 2/2">Сменный 2/2</option>
        </select>
      </div>
      <WorkTypeSelect />
    </div>
  );
}
