import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  VISIBLE_CART,
  RESET_CART,
} from "./constants";
import { InsuranceCardsType, ActionCartType } from "./types";
import bikeInsursnce from "../../img/ui-tw-idv.png";
import jewelryInsursnce from "../../img/images.png";
import electrInsurance from "../../img/depositphotos_453703706-stock-illustration-electronic-insurance-hardware-digital-insurers.jpg";
import sportsInsurance from "../../img/sport-activity-insurance.png";

const initialState: InsuranceCardsType = {
  packages: [
    {
      id: 0,
      name: "Bike",
      photo: bikeInsursnce,
      title: "check new conditions for insurance",
      risk: 0.3,
      coverage: [1, 3000],
    },
    {
      id: 1,
      name: "Jewelry",
      photo: jewelryInsursnce,
      title: "check new conditions for insurance",
      risk: 0.5,
      coverage: [500, 10000],
    },
    {
      id: 2,
      name: "Electronics",
      photo: electrInsurance,
      title: "check new conditions for insurance",
      risk: 0.35,
      coverage: [500, 6000],
    },
    {
      id: 3,
      name: "Sports Equipment",
      photo: sportsInsurance,
      title: "check new conditions for insurance",
      risk: 0.3,
      coverage: [1, 20000],
    },
  ],
  cart: [],
  isOpen: false,
};

const insuranceReducer = (
  state = initialState,
  action: ActionCartType
): InsuranceCardsType => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          { id: action.payload.id, coverage: action.payload.coverage },
        ],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          ({ id, coverage }) =>
            id !== action.payload.id || action.payload.coverage !== coverage
        ),
      };
    case VISIBLE_CART:
      return {
        ...state,
        isOpen: action.payload,
      };
    case RESET_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};

export default insuranceReducer;
