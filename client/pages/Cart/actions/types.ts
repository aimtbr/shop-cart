import { Action } from 'redux';


export const INCR_ITEM_COUNT = 'INCR_ITEM_COUNT';
export const DECR_ITEM_COUNT = 'DECR_ITEM_COUNT';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS';


interface CartItemCount extends Action {
  type: typeof INCR_ITEM_COUNT | typeof DECR_ITEM_COUNT;
  payload: {
    id: string;
  }
}

interface RemoveCartItem extends Action {
  type: typeof REMOVE_CART_ITEM;
  payload: {
    id: string;
  }
}

interface RemoveCartItems extends Action {
  type: typeof REMOVE_CART_ITEMS;
  payload: {
    ids: string[];
  }
}

type CartActions = CartItemCount | RemoveCartItem | RemoveCartItems;

export default CartActions;
