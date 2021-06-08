import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY } from './constants';

export type InsuranceCardsType = {
    package: Array<{
        id: number,
        name: string,
        photo: any,
    }>
    cart: CartReducerType[]
}

export type CartReducerType = {
    id: number;
    count: number;
};

export type AddToCartActionType = {
    type: typeof ADD_TO_CART;
    payload: number;
}

export type RemoveFromCartActionType = {
    type: typeof REMOVE_FROM_CART;
    payload: number
}

export type QTYActionType = {
    type: typeof ADJUST_QUANTITY;
    payload: {
        id: number;
        count: any;
    };
};

export type ActionCartType = AddToCartActionType | RemoveFromCartActionType | QTYActionType
