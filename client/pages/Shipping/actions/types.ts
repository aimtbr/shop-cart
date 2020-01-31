import { Action } from 'redux';
import { ShippingFields } from '../reducers/types';

export const shippingTypes = {
  UPDATE_FIELD: 'UPDATE_FIELD',
  CHANGE_READY: 'CHANGE_READY',
};

interface UpdateField extends Action {
  type: string;
  payload: ShippingFields;
}

interface ChangeReady extends Action {
  type: string;
  payload: string;
}


export type ShippingActions = UpdateField |
  ChangeReady;
