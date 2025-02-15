export function InputCriteria() {
  return (
    <div className="input__container criteria">
      <fieldset className="input__group criteria">
        <div className="input__item criteria">
          <label htmlFor="duties" className="input__label">
            Функциональные обязанности
          </label>
          <textarea
            className="input__field criteria"
            id="duties"
            name="functional-duties"
            placeholder="Какую работу будет выполнять сотрудник"
          />
        </div>
        <div className="input__item criteria">
          <label htmlFor="wishes" className="input__label">
            Пожелания к кандидату
          </label>
          <textarea
            className="input__field criteria"
            id="wishes"
            name="wishes-candidate"
            placeholder="Ключевые навыки, достижения"
          />
        </div>
        <div className="input__item criteria">
          <label htmlFor="advantages" className="input__label">
            Преимуществом будет
          </label>
          <textarea
            className="input__field criteria"
            id="advantages"
            name="advantages-if"
            placeholder="Дополнительные специальные навыки"
          />
        </div>
      </fieldset>
    </div>
  );
}
