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
          offer.id === action.offer.id ? action.offer : offer
        ),
      };
    case "DELETE_OFFER":
      return {
        offers: state.offers.filter((offer) => offer.id !== action.id),
      };
    default:
      return state;
  }
};
