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
        <div className="required-fields">
          <input
            className="new-item-name form-item"
            placeholder="Enter a trash name"
          />
          <input
            className="new-item-reason form-item"
            placeholder="Enter an excuse, hoarder"
          />
          <select className="new-item-cleanliness form-item">
            <option className="cleanliness-placeholder" selected disabled>
              How filthy is it?
            </option>
            <option>Sparkling</option>
            <option>Dusty</option>
            <option>Rancid</option>
          </select>
        </div>
        <span className="submit-button" type="submit">
          Add it the the pile...
        </span>
      </div>
    );
  }
}

export default AddItemForm;
