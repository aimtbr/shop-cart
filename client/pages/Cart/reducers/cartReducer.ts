import Actions from '../actions/actions';
import * as ActionTypes from '../actions/types';
import { Item } from '../../../store/types';

export interface CartState {
  items: {
    [index: string]: Item
  };
  selected_items: string[];
  currency: string;
  totalPrice: string;
}

const initialState: CartState = {
  items: {},
  selected_items: [],
  currency: 'EUR',
  totalPrice: new Intl.NumberFormat('UA', { style: 'currency', currency: 'EUR' }).format(0)
};

const cartReducer = (state=initialState, action: Actions): CartState => {
  switch (action.type) {
    case ActionTypes.INCR_ITEM_COUNT: {
      // let { items } = state;

      // if (id in state.items) {
      //   const changedItem = { ...state.items[id] };
      //   changedItem.count += 1;
      //   items[id] = changedItem;
      // }

      // return { ...state, items };
      const { id } = action.payload;
      let { items } = state;
      const changedItem = items[id];

      changedItem.count += 1; // MOVE ALL SUCH CALCULATIONS TO ACTIONS
      items[id] = changedItem; // DON'T FORGET TO RECALCULATE THE PRICES

      return { ...state, items };
    }

    case ActionTypes.DECR_ITEM_COUNT: {
      const { id } = action.payload;
      let { items } = state;
      const changedItem = items[id];

      changedItem.count -= 1;
      items[id] = changedItem;

      return { ...state, items };
    }

    case ActionTypes.REMOVE_CART_ITEM: {
      const { id } = action.payload;
      let { items } = state;

      delete items[id];

      return { ...state, items };
    }

    case ActionTypes.REMOVE_CART_ITEMS: {
      const { ids } = action.payload;
      let { items } = state;
      let id;

      for (id of ids) {
        if (id in items) {
          delete items[id];
        }
      }

      return { ...state, items };
    }

    default:
      return state;
  }
};

export default cartReducer;
