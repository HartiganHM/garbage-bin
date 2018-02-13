import React from 'react';
import Item from '../Item/Item';
import AddItemForm from '../AddItemForm/AddItemForm';
import './ItemList.css';

const ItemList = (props) => {
  const { items, addItem } = props;

  const garageItems = items.map((item, index) => (
    <Item key={index} data={item} />
  ));

  return (
    <div className="ItemList">
      <span className="list-header">Check Out Yer Junk!</span>
      <div className="item-container">{garageItems}</div>
      <AddItemForm addItem={addItem}/>
    </div>
  );
};

export default ItemList;
