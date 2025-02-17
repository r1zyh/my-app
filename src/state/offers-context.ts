import { createContext, Dispatch } from "react";
import { TOffersAction, TOffersState } from "./type";

export const initialState: TOffersState = {
  offers: [],
};

export const OffersContext = createContext<{
  state: TOffersState;
  dispatch: Dispatch<TOffersAction>;
} | null>(null);
