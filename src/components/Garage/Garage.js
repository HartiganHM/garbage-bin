import React from 'react';
import ItemList from '../ItemList/ItemList';
import './Garage.css';

const Garage = (props) => {
  const { items, isopen, addItem } = props;
  const doorClass = isopen === 'open' ? 'garage-door open' : 'garage-door closed';

  return (
    <div className="Garage">
      <div className={doorClass}></div>
      <ItemList items={items} addItem={addItem}/>
    </div>
  );
};

export default Garage;
