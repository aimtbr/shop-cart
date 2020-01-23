import * as React from 'react';
import { Item as ItemType } from '../../../store/types';


interface Props extends ItemType {

}

const Item = (props: Props): React.ReactElement => {
  const { title, image, description, count, price, currency,
     } = props;
  const totalPrice = new Intl.NumberFormat('UA', { style: 'currency', currency }).format(price * count);

  return (
    <div className="item">
      <img src={image}/>
      <p className="item-title">
        {title}
      </p>
      <button className="remove-item-button" type="button">
        <i className="fas fa-trash-alt"></i>
      </button>
      <p className="item-description">
        {description}
      </p>
      <div className="item-count-wrapper">
        <button className="item-minus-button" type="button">-</button>
        <p className="item-count">
          {count}
        </p>
        <button className="item-plus-button" type="button">+</button>
      </div>
      <p className="item-total">
        {totalPrice}
      </p>
    </div>
  );
};

export default Item;
