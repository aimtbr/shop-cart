import * as shippingTypes from '../actions/types';
import { IShipping } from './types';


const initialState: IShipping = {
  name: '',
  address: '',
  phone: '',
  email: '',
  shippingOption: '',
  ready: {
    name: false,
    address: false,
    phone: true,
    email: true,
  },
  additionalPrice: 0
};

const ShippingReducer = (
    state=initialState,
    action: shippingTypes.ShippingActions
  ): IShipping => {
    switch (action.type) {
      case shippingTypes.UPDATE_FIELD: {
        const field = Object.keys(action.payload)[0];

        if (field in state) {
          return { ...state, ...action.payload };
        }

        return state;
      }

      case shippingTypes.CHANGE_READY: {
        const field = Object.keys(action.payload)[0];
        const { ready } = state;

        if (field in ready) {
          return { ...state, ready: { ...ready, ...action.payload }};
        }

        return state;
      }

      case shippingTypes.UPDATE_PRICE: {
        const price = action.payload;

        if (price >= 0) {
          return { ...state, additionalPrice: price };
        }

        return state;
      }

      case shippingTypes.RESET_FIELD: {
        const field = action.payload;

        if (field in state) {
          return { ...state, [field]: initialState[field]};
        }

        return state;
      }

      default:
        return state;
    }
  };

export default ShippingReducer;
