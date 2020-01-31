import Cart from './Cart';
import { ICart } from './Cart/reducers/types';
import Shipping from './Shipping';
import { IShipping } from './Shipping/reducers/types';


const Pages = {
  Cart,
  Shipping,
};

export interface StoreState {
  cart: ICart;
  shipping: IShipping;
}

export type PageTypes = typeof Cart
  | typeof Shipping;

export default Pages;
