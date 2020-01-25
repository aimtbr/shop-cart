import * as ActionTypes from '../actions/types';
import { CartItem, CartItems } from '../../../store/types';

export interface CartState {
  items: CartItems;
  currency: string;
  totalPrice: string;
}

const initialState: CartState = {
  items: {},
  currency: 'EUR',
  totalPrice: new Intl.NumberFormat('UA', { style: 'currency', currency: 'EUR' }).format(0)
};

const cartReducer = (state=initialState, action: ActionTypes.CartActions): CartState => {
  switch (action.type) {
    case ActionTypes.INCR_ITEM_COUNT: {
      const { items } = state;
      const { id } = action.payload;

      if (id in items) {
        const cartItem = items[id];
        const { item } = cartItem;
        if (cartItem.count < item.count && cartItem.count < 50) {
          cartItem.count += 1;

          return { ...state, items: { ...items, [id]: cartItem }};
        }
      }

      return state;
    }

    case ActionTypes.DECR_ITEM_COUNT: {
      const { items } = state;
      const { id } = action.payload;

      if (id in items) {
        const item = items[id];

        if (item.count > 1) {
          item.count -= 1;

          return { ...state, items: { ...items, [id]: item }};
        }
      }

      return state;
    }

    case ActionTypes.REMOVE_CART_ITEM: {
      const { id } = action.payload;
      let { items } = state;

      if (id in items) {
        delete items[id];
      }

      return { ...state, items };
    }

    // case ActionTypes.REMOVE_CART_ITEMS: {
    //   const { ids } = action.payload;
    //   let { items } = state;
    //   let id;

    //   for (id of ids) {
    //     if (id in items) {
    //       delete items[id];
    //     }
    //   }

    //   return { ...state, items };
    // }

    case ActionTypes.REFRESH_CART_ITEMS: {
      const { items } = action.payload;

      return { ...state, items };
    }

    case ActionTypes.REFRESH_TOTAL_PRICE: {
      const { items } = state;
      const itemValues = Object.values(items);

      if (itemValues.length > 0) {
        const totalPriceNumber = itemValues.reduce(
          (accumulator, currentItem) => {
            const currentItemTyped = currentItem;

            return accumulator + currentItemTyped.item.price * currentItemTyped.count;
          }, 0);

        const totalPrice = new Intl.NumberFormat('UA', {
          style: 'currency',
          currency: state.currency,
        }).format(totalPriceNumber);

        return { ...state, totalPrice };
      }
      return state;
    }

    default:
      return state;
  }
};

export default cartReducer;
