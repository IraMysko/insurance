import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
  VISIBLE_CART,
} from "./constants";
import {
  AddToCartActionType,
  RemoveFromCartActionType,
  VisibleCartActionType,
  ResetCartActionType,
} from "./types";

export const addToCart = (
  id: number,
  coverage: number
): AddToCartActionType => ({
  type: ADD_TO_CART,
  payload: { id, coverage },
});

export const removeFromCart = (
  id: number,
  coverage: number
): RemoveFromCartActionType => ({
  type: REMOVE_FROM_CART,
  payload: { id, coverage },
});

export const visibleCart = (isOpen: boolean): VisibleCartActionType => ({
  type: VISIBLE_CART,
  payload: isOpen,
});

export const resetCart = (): ResetCartActionType => ({
  type: RESET_CART,
});
