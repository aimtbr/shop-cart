import { connect } from "react-redux";

import cartReducer from './reducers/cartReducer';
import { Page, AppThunk } from "../../store/types";


interface ExtractedProps {

}

// interface DipatchProps {

// }

interface DipatchProps {
  [index: string]: AppThunk;
}

class CartPage extends Page<ExtractedProps> {
  static readonly path = '/cart';
  static readonly reducer = { cart: cartReducer };

  render () {
    return <Cart />;
  }
}

const mapStateToProps = (): ExtractedProps => ({

});

const mapDispatchToProps = (): DipatchProps => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
