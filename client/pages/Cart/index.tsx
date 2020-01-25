import * as React from 'react';
import { connect } from "react-redux";

import { getCartItems, increaseItemCount,
  decreaseItemCount, removeCartItem } from './actions/actions';
import cartReducer from './reducers/cartReducer';
import Cart from './components/Cart';
import { StoreState } from '../../pages';
import { Page, AppDispatch, CartItems } from "../../store/types";


type Props = StateProps & DipatchProps;

interface StateProps {
  items: CartItems;
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

    this.props.getCartItems();

    this.incItemCount = this.incItemCount.bind(this);
    this.decItemCount = this.decItemCount.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
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
    const { items } = this.props;

    return <Cart items={items}
      decItemCount={decItemCount}
      incItemCount={incItemCount}
      removeCartItem={removeCartItem}
    />;
  }
}

const mapStateToProps = (state: StoreState): StateProps => ({
  items: state.cart.items,
});

const mapDispatchToProps = (dispatch: AppDispatch): DipatchProps => ({
  getCartItems: () => dispatch(getCartItems()),
  increaseItemCount: (id: string) => dispatch(increaseItemCount(id)),
  decreaseItemCount: (id: string) => dispatch(decreaseItemCount(id)),
  removeCartItem: (id: string) => dispatch(removeCartItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
