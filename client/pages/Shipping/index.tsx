import * as React from 'react';
import { connect } from "react-redux";

import shippingReducer from './reducers/shippingReducer';
import Shipping from './components/Shipping';
import { saveField } from './actions/actions';
import { Page, AppDispatch } from "../../store/types";
import { ShippingFields, IShipping } from './reducers/types';
import { StoreState } from '..';


type Props = StateProps & DipatchProps;

interface StateProps {
  shipping: IShipping;
  totalPrice: number;
}

interface DipatchProps {
  saveField: (field: ShippingFields) => void;
}


class ShippingPage extends Page<Props> {
  constructor(props: Props) {
    super(props);
  }

  static readonly path = '/shipping';
  static readonly reducer = { shipping: shippingReducer };

  render () {
    const { saveField, shipping, totalPrice } = this.props;

    return <Shipping
      {...shipping}
      saveField={saveField}
      totalPrice={totalPrice}
    />;
  }
}

const mapStateToProps = (state: StoreState): StateProps => ({
  shipping: state.shipping,
  totalPrice: state.cart.totalPrice
});

const mapDispatchToProps = (dispatch: AppDispatch): DipatchProps => ({
  saveField: (field) => dispatch(saveField(field)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingPage);
