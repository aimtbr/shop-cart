export interface Item {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  count: number;
  price: number;
  currency: string;
}

export interface CartItem {
  item: Item;
  count: number;
  total: number;
}
