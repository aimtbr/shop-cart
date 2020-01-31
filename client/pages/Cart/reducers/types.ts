import { Item } from "../../../../api/db/types";


export interface CartItem {
  item: Item;
  count: number;
}

export interface CartItems {
  [index: string]: CartItem;
}

export interface ICart {
  items: CartItems;
  currency: string;
  totalPrice: number;
}
