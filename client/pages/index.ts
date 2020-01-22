import Cart from './Cart';
import Payment from './Payment';


const Pages = {
  Cart,
  Payment,
};

export type PageTypes = typeof Cart
  | typeof Payment;

export default Pages;
