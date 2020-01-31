import { AppThunk } from '../../../store/types';
import { shippingTypes } from './types';
import { ShippingFields } from '../reducers/types';


export const saveField = (field: ShippingFields): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: shippingTypes.UPDATE_FIELD,
      payload: field
    })
  };
};
