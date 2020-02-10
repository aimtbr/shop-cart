import * as React from 'react';
import { connect } from "react-redux";

import cartReducer from './reducers/cartReducer';
import Cart from './components/Cart';
import { StoreState } from '..';
import {
  getCartItems,
  increaseItemCount,
  decreaseItemCount,
  removeCartItem, } from './actions/actions';
import { ICart } from './reducers/types';
import { Page, AppDispatch } from "../../store/types";


type Props = StateProps & DipatchProps;

interface StateProps {
  cart: ICart;
}

interface DipatchProps {
  getCartItems: () => void;
  increaseItemCount: (id: string) => void;
  decreaseItemCount: (id: string) => void;
  removeCartItem: (id: string) => void;
}


class CartPage extends Page<Props> {
  constructor(props: Props) {
    super(props);
    const itemsCount = Object.keys(this.props.cart.items).length;

    if (itemsCount === 0) {
      this.props.getCartItems();
    }

    this.incItemCount = this.incItemCount.bind(this);
    this.decItemCount = this.decItemCount.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    console.log('HI');
  }

  static readonly path = '/cart';
  static readonly reducer = { cart: cartReducer };

  incItemCount(e: React.MouseEvent, id: string) {
    e.preventDefault();

    this.props.increaseItemCount(id);
  }

  decItemCount(e: React.MouseEvent, id: string) {
    e.preventDefault();

    this.props.decreaseItemCount(id);
  }

  removeCartItem(e: React.MouseEvent, id: string) {
    e.preventDefault();

    this.props.removeCartItem(id);
  }

  render () {
    const { decItemCount, incItemCount, removeCartItem } = this;
    const { cart } = this.props;

    return <Cart {...cart}
      decItemCount={decItemCount}
      incItemCount={incItemCount}
      removeCartItem={removeCartItem}
    />;
  }
}

const mapStateToProps = (state: StoreState): StateProps => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: AppDispatch): DipatchProps => ({
  getCartItems: () => dispatch(getCartItems()),
  increaseItemCount: (id: string) => dispatch(increaseItemCount(id)),
  decreaseItemCount: (id: string) => dispatch(decreaseItemCount(id)),
  removeCartItem: (id: string) => dispatch(removeCartItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
