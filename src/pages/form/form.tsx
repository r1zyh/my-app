import { ChangeEvent, JSX, useState } from "react";
import { Header } from "../../components/header/header";
import { Container } from "../../components/container";

export function Form(): JSX.Element {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className="main__title">Форма размещения заявки</h1>
        <div className="input__container">
          <div className="input__group">
            <div className="input__item">
              <label htmlFor="position-name" className="input-label">
                Наименование должности
              </label>
              <input type="text" className="input__field" id="position-name" />
            </div>
            <div className="input__item">
              <label htmlFor="vacancy-name" className="input-label">
                Наименование вакансии
              </label>
              <input type="text" className="input__field" id="vacancy-name" />
            </div>
            <div className="input__item">
              <label htmlFor="department-name" className="input-label">
                Отдел
              </label>
              <input
                type="text"
                className="input__field"
                id="department-name"
              />
            </div>
          </div>

          <div className="input__group">
            <div className="input__item">
              <label htmlFor="open-date" className="input-label">
                Дата открытия
              </label>
              <div className="custom__date">
                <input
                  type="date"
                  className="input__field input__date"
                  id="open-date"
                />
              </div>
            </div>
            <div className="input__item">
              <label htmlFor="close-date" className="input-label">
                Плановая дата закрытия
              </label>
              <div className="custom__date">
                <input
                  type="date"
                  className="input__field input__date"
                  id="close-date"
                />
              </div>
            </div>
          </div>

          <div className="input__group">
            <div className="input__item">
              <label htmlFor="education" className="input-label">
                Образование
              </label>

              <select
                className={`input__field select ${
                  selectedValue === "" ? "placeholder" : ""
                }`}
                id="education"
                defaultValue=""
                onChange={handleSelectChange}
              >
                <option value="" hidden>
                  Выберите
                </option>
                <option value="secondary">Среднее</option>
                <option value="secondary-special">Средне-специальное</option>
                <option value="higher">Высшее</option>
              </select>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
