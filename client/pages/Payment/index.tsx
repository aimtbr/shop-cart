import * as React from 'react';
import { connect } from "react-redux";

// import Payment from './components/Payment';
// import paymentReducer from './reducers/paymentReducer';
import { Page, AppThunk } from "../../store/types";


interface ExtractedProps {

}

// interface DipatchProps {

// }

interface DipatchProps {
  [index: string]: AppThunk;
}

class PaymentPage extends Page<ExtractedProps> {
  static readonly path = '/payment';
  // static readonly reducer = { payment: paymentReducer };

  render () {
    return <span>HI</span>;
    // return <Payment />;
  }
}

const mapStateToProps = (): ExtractedProps => ({

});

const mapDispatchToProps = (): DipatchProps => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
