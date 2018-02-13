import React from 'react';
import ItemList from '../ItemList/ItemList';
import './Garage.css';

const Garage = props => {
  const { items, isopen, addItem, sortOrder, sortItems } = props;
  const doorClass =
    isopen === 'open' ? 'garage-door open' : 'garage-door closed';

  return (
    <div className="Garage">
      <div className={doorClass} />
      <ItemList
        items={items}
        addItem={addItem}
        sortOrder={sortOrder}
        sortItems={sortItems}
      />
    </div>
  );
};

export default Garage;
