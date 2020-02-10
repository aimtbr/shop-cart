import * as cartTypes from '../actions/types';
import { ICart } from './types';

const initialState: ICart = {
  items: {},
  currency: 'EUR',
  totalPrice: 0,
};

const cartReducer = (state=initialState, action: cartTypes.CartActions): ICart => {
  switch (action.type) {
    case cartTypes.INCR_ITEM_COUNT: {
      const { items, totalPrice } = state;
      const { id } = action.payload;

      if (id in items) {
        const cartItem = items[id];
        const { item } = cartItem;
        const { price } = item;

        if (cartItem.count < item.count && cartItem.count < 50) {
          cartItem.count += 1;

          return {
            ...state,
            items: { ...items, [id]: cartItem },
            totalPrice: totalPrice + price,
          };
        }
      }

      return state;
    }

    case cartTypes.DECR_ITEM_COUNT: {
      const { items, totalPrice } = state;
      const { id } = action.payload;

      if (id in items) {
        const cartItem = items[id];
        const { price } = cartItem.item;

        if (cartItem.count > 1) {
          cartItem.count -= 1;

          return {
            ...state,
            items: { ...items, [id]: cartItem },
            totalPrice: totalPrice - price,
          };
        }
      }

      return state;
    }

    case cartTypes.REMOVE_CART_ITEM: {
      const { id } = action.payload;
      let { items, totalPrice } = state;

      if (id in items) {
        const cartItem = items[id];
        const { count, item } = cartItem;

        const currentTotalPrice = totalPrice - count * item.price;

        delete items[id];

        return { ...state, items, totalPrice: currentTotalPrice };
      }

      return state;
    }

    case cartTypes.REFRESH_CART_ITEMS: {
      let itemKey;
      let totalPrice = 0;
      const { items } = action.payload;

      for (itemKey in items) {
        const cartItem = items[itemKey];
        const { count, item } = cartItem;

        totalPrice += count * item.price;
      }

      return { ...state, items, totalPrice };
    }

    default:
      return state;
  }
};

export default cartReducer;
