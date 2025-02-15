import { useState } from "react";

export function GenderSelect() {
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <div className="input__item radio">
      <label className="input-label">Пол</label>
      <div className="gender__container">
        <label className="gender__option">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === "male"}
            onChange={() => setSelectedGender("male")}
          />
          <span className="custom-radio">
            {selectedGender === "male" && (
              <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
            )}
          </span>
          Мужской
        </label>
        <label className="gender__option">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={() => setSelectedGender("female")}
          />
          <span className="custom-radio">
            {selectedGender === "female" && (
              <img src="/src/assets/icons/Radiobutton.svg" alt="выбрано" />
            )}
          </span>
          Женский
        </label>
      </div>
    </div>
  );
}
