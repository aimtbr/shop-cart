import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";

import { getCartItems } from './actions/actions';
import cartReducer from './reducers/cartReducer';
import Cart from './components/Cart';
import { StoreState } from '../../pages';
import { Page, AppDispatch, Item } from "../../store/types";


type Props = StateProps & DipatchProps;

interface StateProps {
  items: {
    [index: string]: Item
  };
}

// interface DipatchProps {

// }

interface DipatchProps {
  [index: string]: () => void;
}

class CartPage extends Page<Props> {
  static readonly path = '/cart';
  static readonly reducer = { cart: cartReducer };

  componentWillMount () {
    this.props.getCartItems();
  }

  render () {
    const { items } = this.props;

    return <Cart items={items}/>;
  }
}

const mapStateToProps = (state: StoreState): StateProps => ({
  items: state.cart.items,
});

const mapDispatchToProps = (dispatch: AppDispatch): DipatchProps => ({
  getCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
