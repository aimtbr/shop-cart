import * as React from 'react';

interface ExtractedProps {
  title: string;
  image: string;
  description: string;
  count: number;
  total:
}

const Item = (props: ExtractedProps): React.ReactElement<ExtractedProps> => {
  const { title, image, description, count, total } = props;

  return (
  <div className="item">
    <img src={image}/>
    <p className="item-title">
      {title}
    </p>
    <button className="remove-item-button">
      {/* ADD THE FONT LOGO AND REVIEW WHAT IS THE BEST WAY TO DO IT MAYBE WITHOUT p TAG*/}
    </button>
    <p className="item-description">
      {description}
    </p>
    <div className="item-count-wrapper">
      <button className="item-minus-button">-</button>
      <p className="item-count">
        {count}
      </p>
      <button className="item-plus-button">+</button>
    </div>
    <p className="item-total">
      {total}
    </p>
  </div>
  );
};

export default Item;
