import { combineReducers } from 'redux';
import cartReucer from './cartReucer';

const rootReducer = combineReducers({
    cart: cartReucer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
