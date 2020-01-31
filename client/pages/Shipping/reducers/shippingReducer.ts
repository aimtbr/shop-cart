import { shippingTypes, ShippingActions } from '../actions/types';
import { IShipping } from './types';
import { shippingOptions } from '../config/options';

const initialState: IShipping = {
  name: '',
  address: '',
  phone: '',
  email: '',
  shippingOptions: '',
  ready: {
    name: false,
    address: false,
    phone: true,
    email: true,
  }
};

const ShippingReducer = (state=initialState, action: ShippingActions): IShipping => {
  switch (action.type) {
    case shippingTypes.UPDATE_FIELD: {
      const fields = Object.keys(action.payload);

      if (fields.every((field) => field in state)) {
        return { ...state, ...action.payload };
      }

      return state;
    }

    case shippingTypes.CHANGE_READY: {
      return { ...state, ready: { ...state.ready, ...action.payload }};
    }

    default:
      return state;
  }
};

export default ShippingReducer;
