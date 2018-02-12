import React from 'react';
import ItemList from '../ItemList/ItemList';
import './Garage.css';

const Garage = ({ items }) => {
  return (
    <div className="Garage">
      <ItemList items={items} />
    </div>
  );
};

export default Garage;
