export function WorkTypeSelect() {
  return (
    <div className="input__item radio">
      <label className="input__label">Тип занятости</label>
      <div className="radio__container work">
        <label className="radio__option work" htmlFor="full-work">
          <input
            type="radio"
            name="full-time-work"
            id="full-work"
            value="full-work"
          />
          <span className="custom__radio">
            {/* {selected === "male" && (
                  <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
                )} */}
          </span>
          Полная занятость
        </label>
        <label className="radio__option work" htmlFor="part-work">
          <input
            type="radio"
            name="part-time-work"
            id="part-work"
            value="part-work"
          />
          <span className="custom__radio">
            {/* {selectedGender === "female" && (
                  <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
                )} */}
          </span>
          Частичная занятость
        </label>
        <label className="radio__option work" htmlFor="internship">
          <input
            type="radio"
            name="internship-work"
            id="internship"
            value="internship"
          />
          <span className="custom__radio">
            {/* {selected === "male" && (
                  <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
                )} */}
          </span>
          Стажировка
        </label>
      </div>
    </div>
  );
}
