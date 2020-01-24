import * as React from 'react';

import { Items } from '../../../../api/db/database';
import { AppThunk } from '../../../store/types';
import * as ActionTypes from './types';

export const getCartItems = (): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.REFRESH_CART_ITEMS,
      payload: {
        items: Items
      }
    });
  };
};
