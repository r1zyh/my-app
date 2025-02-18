import { TOffersState, TOffersAction } from "./type";

export const offersReducer = (
  state: TOffersState,
  action: TOffersAction
): TOffersState => {
  switch (action.type) {
    case "ADD_OFFER":
      return { offers: [...state.offers, action.offer] };
    case "UPDATE_OFFER":
      return {
        offers: state.offers.map((offer) =>
          offer.id === action.offer.id ? { ...offer, ...action.offer } : offer
        ),
      };
    default:
      return state;
  }
};
