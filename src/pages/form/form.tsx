import { Formik, Form } from "formik";
import { Header } from "../../components/header/header";
import { Container } from "../../components/page-container/page-container";
import { InputConditions } from "./components/input-conditions";
import { InputCriteria } from "./components/input-criteria";
import { InputGeneral } from "./components/input-general";
import { validationSchema } from "./const";
import { TOffer } from "../../state/type";
import { useOffersContext } from "../../hooks/useOffersContext";
import { useNavigate, useParams } from "react-router-dom";
import { AppRoute } from "../../const";
import { useEffect, useState } from "react";

export function VacancyForm() {
  const { state, dispatch } = useOffersContext();
  const { offerId } = useParams<{ offerId?: string }>();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<TOffer>({
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
    schedule: "",
    employmentType: "",
    duties: "",
    wishes: "",
    advantages: "",
    suggestions: "",
  });

  useEffect(() => {
    if (offerId) {
      const offer = state.offers.find((offer) => offer.id === offerId);
      if (offer) {
        setInitialValues(offer);
      }
    }
  }, [offerId, state.offers]);

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (offerId) {
      dispatch({
        type: "UPDATE_OFFER",
        offer: { ...values, id: offerId },
      });
    } else {
      const newOffer: TOffer = {
        id: (Math.random() * 1).toFixed(5),
        ...values,
      };
      dispatch({
        type: "ADD_OFFER",
        offer: newOffer,
      });
    }
    resetForm();
    navigate(AppRoute.Main);
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className="main__title">
          Форма {`${offerId ? "редактирования" : "размещение"}`}{" "}
          <span className="main__title--underline">заявки</span>
        </h1>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
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
