import { Action } from 'redux';
import { IChangableFields, IReadiness } from '../reducers/types';

// Action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const CHANGE_READY = 'CHANGE_READY';
export const UPDATE_PRICE = 'UPDATE_PRICE';
export const RESET_FIELD = 'RESET_FIELD';


// Actions
interface IUpdateField extends Action {
  type: typeof UPDATE_FIELD;
  payload: IChangableFields;
}

interface IChangeReady extends Action {
  type: typeof CHANGE_READY;
  payload: IReadiness;
}

interface IUpdatePrice extends Action {
  type: typeof UPDATE_PRICE;
  payload: number;
}

interface IResetField extends Action {
  type: typeof RESET_FIELD;
  payload: keyof IChangableFields;
}


export type ShippingActions = IUpdateField |
  IChangeReady |
  IUpdatePrice |
  IResetField;
