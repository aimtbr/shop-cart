import * as React from 'react';
import { connect } from "react-redux";

import shippingReducer from './reducers/shippingReducer';
import Shipping from './components/Shipping';
import {
  updateField,
  changeReady,
  updatePrice,
  resetField
} from './actions/actions';
import { Page, AppDispatch } from "../../store/types";
import { IChangableFields, IShipping, IReadiness } from './reducers/types';
import { StoreState } from '..';


type Props = StateProps & DipatchProps;

interface StateProps {
  shipping: IShipping;
  totalPrice: number;
}

interface DipatchProps {
  updateField: (field: IChangableFields) => void;
  changeReady: (field: IReadiness) => void;
  updatePrice: (price: number) => void;
  resetField: (field: keyof IChangableFields) => void;
}


class ShippingPage extends Page<Props> {
  constructor(props: Props) {
    super(props);
  }

  static readonly path = '/shipping';
  static readonly reducer = { shipping: shippingReducer };

  render () {
    const {
      updateField,
      shipping,
      totalPrice,
      changeReady,
      updatePrice,
      resetField
    } = this.props;

    return <Shipping
      {...shipping}
      updateField={updateField}
      totalPrice={totalPrice}
      changeReady={changeReady}
      updatePrice={updatePrice}
      resetField={resetField}
    />;
  }
}

const mapStateToProps = (state: StoreState): StateProps => ({
  shipping: state.shipping,
  totalPrice: state.cart.totalPrice
});

const mapDispatchToProps = (dispatch: AppDispatch): DipatchProps => ({
  updateField: (field) => dispatch(updateField(field)),
  changeReady: (field) => dispatch(changeReady(field)),
  updatePrice: (price) => dispatch(updatePrice(price)),
  resetField: (field) => dispatch(resetField(field)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingPage);
