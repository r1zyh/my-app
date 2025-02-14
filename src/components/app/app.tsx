import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import { Form } from "../../pages/form";
import { Main } from "../../pages/main";
export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}></Route>
        <Route path={AppRoute.Form} element={<Form />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}
