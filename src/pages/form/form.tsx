import { Formik, Form } from "formik";
import { Header } from "../../components/header/header";
import { Container } from "../../components/page-container/page-container";
import { InputConditions } from "./components/input-conditions";
import { InputCriteria } from "./components/input-criteria";
import { InputGeneral } from "./components/input-general";
import { validationSchema } from "./const";


export function VacancyForm() {
  const initialValues = {
    vacancyName: "",
    department: "",
    salary: "",
    openDate: "",
    closeDate: "",
    gender: "",
    region: "",
    address: "",
    education: "",
    experience: "",
    experienceRequirements: {
      from: "",
      to: "",
    },
    location: "",
    schedule: "",
    employmentType: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form Data:", values);
  };
  return (
    <>
      <Header />
      <Container>
        <h1 className="main__title">Форма размещения заявки</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <InputGeneral />
            <InputConditions />
            <InputCriteria />
            <button type="submit">Отправить</button>
          </Form>
        </Formik>
      </Container>
    </>
  );
}
