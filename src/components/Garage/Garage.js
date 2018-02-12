import React from 'react';
import ItemList from '../ItemList/ItemList';
import './Garage.css';

const Garage = (props) => {
  const { items, isOpen } = props;
  const doorClass = isOpen ? 'garage-door open' : 'garage-door closed';
  console.log(doorClass);

  return (
    <div className="Garage">
      <div className={doorClass}></div>
      <ItemList items={items} />
    </div>
  );
};

export default Garage;
