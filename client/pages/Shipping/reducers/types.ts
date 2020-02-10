// the whole state of the 'Shipping' page
export interface IShipping {
  name: string;
  address: string;
  phone?: string;
  email?: string;
  additionalPrice: number;
  shippingOption: string;
  ready: IReadiness;
}

export interface IReadiness {
  name?: boolean;
  address?: boolean;
  phone?: boolean;
  email?: boolean;
}

export interface IChangableFields {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  shippingOption?: string;
}
