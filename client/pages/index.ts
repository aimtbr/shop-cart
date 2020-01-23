import Cart from './Cart';
import { CartState } from './Cart/reducers/cartReducer';
import Payment from './Payment';


const Pages = {
  Cart,
  Payment,
};

export interface StoreState {
  cart: CartState;
}

export type PageTypes = typeof Cart
  | typeof Payment;

export default Pages;
