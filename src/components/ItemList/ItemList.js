import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ items }) => {
  const garageItems = items.map((item, index) => (
    <Item key={index} data={item} />
  ));

  return <div className="ItemList">{garageItems}</div>;
};

export default ItemList;
