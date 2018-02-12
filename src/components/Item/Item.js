import React from 'react';
import './Item.css';

const Item = props => {
  const { name, reason, cleanliness } = props.data;

  return (
    <div className="Item">
      <span className="item-name">{name}</span>
      <span className="item-reason">{reason}</span>
    </div>
  );
};

export default Item;
