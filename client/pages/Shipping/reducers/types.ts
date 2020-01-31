export interface IShipping {
  name: string;
  address: string;
  phone?: string;
  email?: string;
  shippingOptions: string;
  ready: {
    name: boolean;
    address: boolean;
    phone: boolean;
    email: boolean;
  }
}

export interface ShippingFields {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  shippingOptions?: string;
}
