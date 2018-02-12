import React from 'react';
import './Item.css';

const Item = props => {
  const { name, reason, cleanliness } = props.data;

  const cleanlinessDropdown = ['Sprakling', 'Dusty', 'Rancid'].map((option, index) => {
    let isSelected = false;

    if (cleanliness === option) {
      isSelected = true;
    }

    return <option key={index} selected={isSelected}>{option}</option>
  })

  return (
    <div className="Item">
      <span className="item-name">{name}</span>
      <span className="item-property">
        <span className="section-header">Reason for hoading</span>
        <span className="section-text">{reason}</span>
      </span>
      <span className="item-property">
      <span className="section-header">Is it clean?</span>
      <select className="section-text">{cleanlinessDropdown}</select>
      </span>
    </div>
  );
};

export default Item;
