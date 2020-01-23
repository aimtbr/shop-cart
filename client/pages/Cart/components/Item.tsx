import * as React from 'react';

interface ExtractedProps {
  title: string;
  image: string;
  description: string;
  count: number;
  totalPrice: string;
}

const Item = (props: ExtractedProps): React.ReactElement<ExtractedProps> => {
  const { title, image, description, count, totalPrice } = props;

  return (
  <div className="item">
    <img src={image}/>
    <p className="item-title">
      {title}
    </p>
    <button className="remove-item-button" type="button">
      {/* ADD THE FONT LOGO AND REVIEW WHAT IS THE BEST WAY TO DO IT MAYBE WITHOUT p TAG*/}
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
