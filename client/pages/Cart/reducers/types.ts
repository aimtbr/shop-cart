import { Item } from "../../../store/db/types";


export interface ICartItem {
  item: Item;
  count: number;
}

export interface ICartItems {
  [index: string]: ICartItem;
}

export interface ICart {
  items: ICartItems;
  currency: string;
  totalPrice: number;
}
