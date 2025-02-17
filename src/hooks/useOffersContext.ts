import { useContext } from "react";
import { OffersContext } from "../state/offers-context";

export const useOfferContext = () => {
  const context = useContext(OffersContext);
  if (!context) {
    throw new Error("useOfferContext must be used within an OfferProvider");
  }
  return context;
};
