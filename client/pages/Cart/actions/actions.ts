import { items } from '../../../../api/db/database';
import { AppThunk } from '../../../store/types';
import { cartTypes } from './types';

export const getCartItems = (): AppThunk => {
  return (dispatch) => {
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

