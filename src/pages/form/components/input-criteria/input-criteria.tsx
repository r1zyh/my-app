import { Field } from "formik";

export function InputCriteria() {
  return (
    <div className="input__container criteria">
      <fieldset className="input__group criteria">
        <div className="input__item criteria">
          <label htmlFor="duties" className="input__label">
            Функциональные обязанности
          </label>
          <Field
            as="textarea"
            className="input__field criteria"
            id="duties"
            name="duties"
            placeholder="Какую работу будет выполнять сотрудник"
          />
        </div>

        <div className="input__item criteria">
          <label htmlFor="wishes" className="input__label">
            Пожелания к кандидату
          </label>
          <Field
            as="textarea"
            className="input__field criteria"
            id="wishes"
            name="wishes"
            placeholder="Ключевые навыки, достижения"
          />
        </div>

        <div className="input__item criteria">
          <label htmlFor="advantages" className="input__label">
            Преимуществом будет
          </label>
          <Field
            as="textarea"
            className="input__field criteria"
            id="advantages"
            name="advantages"
            placeholder="Дополнительные специальные навыки"
          />
        </div>

        <div className="input__item criteria">
          <label htmlFor="suggestions" className="input__label">
            Мы предлагаем
          </label>
          <Field
            as="textarea"
            className="input__field criteria"
            id="suggestions"
            name="suggestions"
            placeholder="Мы предлагаем"
          />
        </div>
      </fieldset>
    </div>
  );
}
