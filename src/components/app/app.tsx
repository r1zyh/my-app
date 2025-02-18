import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import { VacancyForm } from "../../pages/form";
import { Main } from "../../pages/main";
import { OffersProvider } from "../../state/offerProvider";

export function App() {
  return (
    <BrowserRouter>
      <OffersProvider>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />}></Route>
          <Route
            path={`${AppRoute.Form}/:offerId?`}
            element={<VacancyForm />}
          ></Route>
        </Routes>
      </OffersProvider>
    </BrowserRouter>
  );
}
