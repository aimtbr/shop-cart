import { AppThunk } from '../../../store/types';
import { items } from '../../../store/db/database';
import * as cartTypes from './types';

export const getCartItems = (): AppThunk<Promise<void>> => {
  return async (dispatch): Promise<void> => {
    const cartItems = items.reduce((accumulator, currentItem, index) => {
      const { id: currentItemId } = currentItem;
      const cartItem = {
        [currentItemId]: {
          item: currentItem,
          count: index + 8,
        },
      };

      return { ...accumulator, ...cartItem };
    }, {});

    dispatch({
      type: cartTypes.REFRESH_CART_ITEMS,
      payload: {
        items: cartItems,
      }
    });
  };
};

export const increaseItemCount = (id: string): AppThunk => {
  return (dispatch) => { // TODO: CHECK HERE INSTEAD OF REDUCER
    dispatch({
      type: cartTypes.INCR_ITEM_COUNT,
      payload: {
        id,
      }
    });
  };
};

export const decreaseItemCount = (id: string): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: cartTypes.DECR_ITEM_COUNT,
      payload: {
        id,
      }
    });
  };
};

export const removeCartItem = (id: string): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: cartTypes.REMOVE_CART_ITEM,
      payload: {
        id,
      }
    });
  };
};

export const updateTotalPrice = (difference: number): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: cartTypes.UPDATE_TOTAL_PRICE,
      payload: difference
    })
  };
};
