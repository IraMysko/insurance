import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY } from './constants'
import { AddToCartActionType, RemoveFromCartActionType, QTYActionType } from './types';

export const addToCart = (id: number): AddToCartActionType => ({
    type: ADD_TO_CART,
    payload: id,
});

export const removeFromCart = (id: number): RemoveFromCartActionType => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const setCartCount = (id: number, count: number): QTYActionType => ({
    type: ADJUST_QUANTITY,
    payload: {
        id: id,
        count: count,
    }
});