import React, { Component } from 'react';
import './AddItemForm.css';

class AddItemForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      reason: '',
      cleanliness: ''
    };
  }

  render() {
    return (
      <div className="AddItemForm">
        <input className="new-item-name" placeholder="Enter a trash name" />
        <input
          className="new-item-name"
          placeholder="Enter an excuse, hoarder"
        />
        <select className="new-item-cleanliness">
          <option className="cleanliness-placeholder" selected disabled>
            How filthy is it?
          </option>
          <option>Sparkling</option>
          <option>Dusty</option>
          <option>Rancid</option>
        </select>
      </div>
    );
  }
}

export default AddItemForm;
