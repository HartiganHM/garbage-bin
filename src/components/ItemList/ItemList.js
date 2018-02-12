import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ items }) => {
  const garageItems = items.map((item, index) => (
    <Item key={index} data={item} />
  ));

  return (
    <div className="ItemList">
    <span className="list-header">Check Out Yer Junk!</span>
      {garageItems}
    </div>);
};

export default ItemList;
