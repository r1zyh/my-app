import { Formik, Form } from "formik";
import { Header } from "../../components/header/header";
import { Container } from "../../components/page-container/page-container";
import { InputConditions } from "./components/input-conditions";
import { InputCriteria } from "./components/input-criteria";
import { InputGeneral } from "./components/input-general";
import { validationSchema } from "./const";
import { TOffer } from "../../state/type";
import { useOffersContext } from "../../hooks/useOffersContext";

export function VacancyForm() {
  const { dispatch } = useOffersContext();
  const initialValues = {
    vacancyName: "",
    jobTitle: "",
    department: "",
    handsOrBills: "",
    salaryFromTo: {
      from: "",
      to: "",
    },
    openDate: "",
    closeDate: "",
    gender: "",
    region: "",
    address: "",
    metro: "",
    education: "",
    experience: "",
    // experienceRequirements: {
    //   from: "",
    //   to: "",
    // },
    schedule: "",
    employmentType: "",
    duties: "",
    wishes: "",
    advantages: "",
    suggestions: "",
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const newOffer: TOffer = {
      id: (Math.random() * 1).toFixed(5),
      ...values,
    };
    dispatch({
      type: "ADD_OFFER",
      offer: newOffer,
    });
    resetForm();
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
            <button className="form__submit" type="submit">
              Отправить
            </button>
            <button className="form__reset" type="reset">
              Сбросить
            </button>
          </Form>
        </Formik>
      </Container>
    </>
  );
}
