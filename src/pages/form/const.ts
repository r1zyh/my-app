import * as Yup from "yup";

export const validationSchema = Yup.object({
  vacancyName: Yup.string().required("Укажите наименование"),
  department: Yup.string().required("Укажите отдел"),
  openDate: Yup.date().required("Выберите дату открытия"),
  closeDate: Yup.date()
    .required("Выберите дату закрытия")
    .min(Yup.ref("openDate"), "Дата закрытия должна быть позже даты открытия"),
  gender: Yup.string()
    .oneOf(["мужской", "женский"], "Выберите пол")
    .required("Пол обязателен"),
  region: Yup.string().required("Укажите регион"),
  address: Yup.string().required(
    "Введите полный адрес. Например, Походный проезд, 3с1"
  ),
  education: Yup.string()
    .oneOf(["secondary", "higher"], "Выберите корректное образование")
    .required("Укажите образование"),
  experience: Yup.string().required("Опыт работы обязателен"),
  schedule: Yup.string()
    .oneOf(
      ["full-day", "replaceable 5/2", "replaceable 2/2"],
      "Выберите корректный график работы"
    )
    .required("Укажите график работы"),
  employmentType: Yup.string()
    .oneOf(
      ["full-work", "part-work", "internship"],
      "Выберите тип занятости"
    )
    .required("Тип занятости обязателен"),
});