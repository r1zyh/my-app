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
        <div className="input__item criteria">
          <label htmlFor="offer" className="input__label">
            Мы предлагаем
          </label>
          <ul className="input__field list">
            <li className="list__item">
              Дружный коллектив, интересные задачи и возможность быть
              услышанным;
            </li>
            <li className="list__item">
              Приобретение навыков работы в большой, разветвлённой и
              сложноподчинённой структуре, задействованной в сфере ИТ;
            </li>
            <li className="list__item">Оформление в соответствии с ТК РФ;</li>
            <li className="list__item">
              Полностью официальная заработная плата
            </li>
          </ul>
        </div>
      </fieldset>
    </div>
  );
}
