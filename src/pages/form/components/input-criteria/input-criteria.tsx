export function InputCriteria() {
  return (
    <div className="input__container criteria">
      <div className="input__group criteria">
        <div className="input__item criteria">
          <label htmlFor="duties" className="input__label">
            Функциональные обязанности
          </label>
          <input
            type="text"
            className="input__field criteria"
            id="duties"
            placeholder="Какую работу будет выполнять сотрудник"
          />
        </div>
        <div className="input__item criteria">
          <label htmlFor="wishes" className="input__label">
            Пожелания к кандидату
          </label>
          <input
            type="text"
            className="input__field criteria"
            id="wishes"
            placeholder="Ключевые навыки, достижения"
          />
        </div>
        <div className="input__item criteria">
          <label htmlFor="advantages" className="input__label">
            Преимуществом будет
          </label>
          <input
            type="text"
            className="input__field criteria"
            id="advantages"
            placeholder="Дополнительные специальные навыки"
          />
        </div>
      </div>
    </div>
  );
}
