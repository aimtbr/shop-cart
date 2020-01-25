import { Items } from '../../../../api/db/database';
import { AppThunk } from '../../../store/types';
import * as ActionTypes from './types';

export const getCartItems = (): AppThunk => {
  return (dispatch) => {
    const items = Items.reduce((accumulator, currentItem, index) => {
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
      type: ActionTypes.REFRESH_CART_ITEMS,
      payload: {
        items,
      }
    });
  };
};

export const increaseItemCount = (id: string): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.INCR_ITEM_COUNT,
      payload: {
        id,
      }
    });

    dispatch({
      type: ActionTypes.REFRESH_TOTAL_PRICE
    })
  };
};

export const decreaseItemCount = (id: string): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.DECR_ITEM_COUNT,
      payload: {
        id,
      }
    });

    dispatch({
      type: ActionTypes.REFRESH_TOTAL_PRICE
    });
  };
};

export const removeCartItem = (id: string): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.REMOVE_CART_ITEM,
      payload: {
        id,
      }
    });

    dispatch({
      type: ActionTypes.REFRESH_TOTAL_PRICE
    })
  };
};

