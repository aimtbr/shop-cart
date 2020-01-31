import { Component } from 'react';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { StoreState } from '../../pages';


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
