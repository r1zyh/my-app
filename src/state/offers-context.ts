import { createContext, Dispatch } from "react";
import { TOffersAction, TOffersState } from "./type";
import mockData from '../mock/data.json'

export const initialState: TOffersState = {
  offers: [...mockData],
};

export const OffersContext = createContext<{
  state: TOffersState;
  dispatch: Dispatch<TOffersAction>;
} | null>(null);
