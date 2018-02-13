import React from 'react';
import ItemList from '../ItemList/ItemList';
import './Garage.css';

const Garage = (props) => {
  const { items, isopen } = props;
  const doorClass = isopen === 'open' ? 'garage-door open' : 'garage-door closed';

  return (
    <div className="Garage">
      <div className={doorClass}></div>
      <ItemList items={items} />
    </div>
  );
};

export default Garage;
