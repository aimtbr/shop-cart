import * as shippingTypes from './types';
import { AppThunk } from '../../../store/types';
import { IChangableFields, IReadiness } from '../reducers/types';


export const updateField = (field: IChangableFields): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: shippingTypes.UPDATE_FIELD,
      payload: field
    })
  };
};

export const changeReady = (field: IReadiness): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: shippingTypes.CHANGE_READY,
      payload: field
    });
  };
};

export const updatePrice = (price: number): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: shippingTypes.UPDATE_PRICE,
      payload: price
    });
  };
};

export const resetField = (field: keyof IChangableFields): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: shippingTypes.RESET_FIELD,
      payload: field
    });
  };
};
