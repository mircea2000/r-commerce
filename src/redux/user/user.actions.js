import {UserActionTypes} from './user.types'
export const setCurrentUser = user => ({
    type: UserActionTypes.TOGGLE_CART_HIDDEN,
    payload: user
});