import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
  VISIBLE_CART,
} from "./constants";

export type InsuranceCardsType = {
  packages: Array<{
    id: number;
    name: string;
    photo: any;
    title: string;
    risk: number;
    coverage: Array<number>;
  }>;
  cart: CartReducerType[];
  isOpen: boolean;
};

export type CartReducerType = {
  id: number;
  coverage: number;
};

export type AddToCartActionType = {
  type: typeof ADD_TO_CART;
  payload: {
    id: number;
    coverage: number;
  };
};

export type RemoveFromCartActionType = {
  type: typeof REMOVE_FROM_CART;
  payload: { id: number; coverage: number };
};

export type VisibleCartActionType = {
  type: typeof VISIBLE_CART;
  payload: boolean;
};

export type ResetCartActionType = {
  type: typeof RESET_CART;
};

export type ActionCartType =
  | AddToCartActionType
  | RemoveFromCartActionType
  | VisibleCartActionType
  | ResetCartActionType;
