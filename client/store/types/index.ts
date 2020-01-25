import { Component } from 'react';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { StoreState } from '../../pages';
import { Items } from '../../../api/db/database';


export interface Item {
  id: string;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  image: string;
  count: number;
  price: number;
  currency: string;
}

export interface CartItem {
  item: Item;
  count: number;
}

export interface CartItems {
  [index: string]: CartItem;
}

export abstract class Page<TProps> extends Component<TProps>{
  static readonly path: string;
  static readonly reducer: object;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  StoreState,
  null,
  Action
>;

export type AppDispatch = ThunkDispatch<StoreState, null, Action>;
