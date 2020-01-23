import { Component } from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../../store';

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

export abstract class Page<TProps> extends Component<TProps>{
  static readonly path: string;
  static readonly reducer: object;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>;
