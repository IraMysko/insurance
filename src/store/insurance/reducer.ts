import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY } from './constants';
import { InsuranceCardsType, ActionCartType } from './types';
import bikeInsursnce from '../../img/ui-tw-idv.png';
import jewelryInsursnce from '../../img/images.png';
import electrInsurance from '../../img/depositphotos_453703706-stock-illustration-electronic-insurance-hardware-digital-insurers.jpg';
import sportsInsurance from '../../img/sport-activity-insurance.png'


const initialState: InsuranceCardsType = {
    package: [{
        id: 0, name: 'Bike', photo: bikeInsursnce
    },
    {
        id: 1, name: 'Jewelry', photo: jewelryInsursnce
    },
    {
        id: 2, name: 'Electronics', photo: electrInsurance
    },
    {
        id: 3, name: 'Sports Equipment', photo: sportsInsurance
    },
    ],
    cart: [],
};


export const cartReducer = (state = initialState, action: ActionCartType): InsuranceCardsType => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, { id: action.payload, count: 1 }],
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(({ id }) => id !== action.payload)
            }
        case ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, count: action.payload.count };
                    } else {
                        return item;
                    }
                })
            }
        default:
            return state;
    }
}