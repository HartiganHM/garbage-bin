import React from 'react';
import Item from '../Item/Item';
import AddItemForm from '../AddItemForm/AddItemForm';
import './ItemList.css';

const ItemList = (props) => {
  const { items, addItem } = props;

  const garageItems = items.map((item, index) => (
    <Item key={index} data={item} />
  ));

  const itemsByType = items.reduce((itemsByType, item, index) => {
    if (!itemsByType[item.cleanliness]) {
      itemsByType[item.cleanliness] = 0;
    }
    itemsByType[item.cleanliness] ++;

    return itemsByType;
  }, {})

  const renderedItems = Object.keys(itemsByType).map(item => <span>{item}:{itemsByType[item]}</span>)

  return (
    <div className="ItemList">
      <span className="list-header">Check Out Yer Junk!</span>
      <div className="garage-count">
        <span className="total-items">Total Junk: {garageItems.length}</span>
        <span className="items-type">
          {renderedItems}
        </span>
      </div>
      <div className="item-container">{garageItems}</div>
      <AddItemForm addItem={addItem}/>
    </div>
  );
};

export default ItemList;
