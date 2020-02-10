import { Action } from 'redux';
import { ICartItems } from '../reducers/types';


export const INCR_ITEM_COUNT = 'INCR_ITEM_COUNT';
export const DECR_ITEM_COUNT = 'DECR_ITEM_COUNT';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const REFRESH_CART_ITEMS = 'REFRESH_CART_ITEMS';
export const UPDATE_TOTAL_PRICE = 'UPDATE_TOTAL_PRICE';


interface ICartItemCount extends Action {
  type: typeof INCR_ITEM_COUNT | typeof DECR_ITEM_COUNT;
  payload: {
    id: string;
  }
}

interface IRemoveCartItem extends Action {
  type: typeof REMOVE_CART_ITEM;
  payload: {
    id: string;
  }
}

// interface RemoveCartItems extends Action {
//   type: typeof REMOVE_CART_ITEMS;
//   payload: {
//     ids: string[];
//   }
// }

interface IRefreshCartItems extends Action {
  type: typeof REFRESH_CART_ITEMS;
  payload: {
    items: ICartItems;
  }
}


export type CartActions = ICartItemCount |
  IRemoveCartItem |
  IRefreshCartItems;
