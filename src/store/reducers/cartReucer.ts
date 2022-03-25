import { AddCartActions } from "../actions/cartActions";

type CartState = {
    product: {amount: number};
}

const initialState: CartState = {
  product: {amount: 0},
}

const cartReducer = (state: CartState = initialState, action: AddCartActions) => {
    switch(action.type) {
        case '@ADD_CART':
            return {
                ...state,
                product: {
                    amount: state.product.amount + 1
                },
            }
        default:
            return state;
    }
}

export default cartReducer;