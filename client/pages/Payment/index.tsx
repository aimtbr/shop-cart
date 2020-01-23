import { connect } from "react-redux";

import Payment from './components/Payment';
import paymentReducer from './reducers/paymentReducer';
import { Page, AppThunk } from "../../store/types";


interface ExtractedProps {

}

// interface DipatchProps {

// }

interface DipatchProps {
  [index: string]: AppThunk;
}

class CartPage extends Page<ExtractedProps> {
  static readonly path = '/payment';
  static readonly reducer = { cart: paymentReducer };

  render () {
    return <Payment />;
  }
}

const mapStateToProps = (): ExtractedProps => ({

});

const mapDispatchToProps = (): DipatchProps => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
