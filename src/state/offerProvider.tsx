import { ReactNode, useReducer } from "react";
import { offersReducer } from "./offers-reducer";
import { initialState, OffersContext } from "./offers-context";

export const OffersProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(offersReducer, initialState);

  return (
    <OffersContext.Provider value={{ state, dispatch }}>
      {children}
    </OffersContext.Provider>
  );
};
