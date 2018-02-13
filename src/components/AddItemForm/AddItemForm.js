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

  handleSubmit = () => {
    this.props.addItem(this.state);
  }

  handleChange = async (property, value) => {
    this.setState({
      [property]: value
    })
  }

  render(props) {
    return (
      <div className="AddItemForm">
        <div className="required-fields">
          <input
            type="text"
            className="new-item-name form-item"
            placeholder="Enter a trash name"
            onChange={(event) => this.handleChange('name', event.target.value)}
          />
          <input
            type="text"
            className="new-item-reason form-item"
            placeholder="Enter an excuse, hoarder"
            onChange={(event) => this.handleChange('reason', event.target.value)}
          />
          <select className="new-item-cleanliness form-item" onChange={(event) => this.handleChange('cleanliness', event.target.value)}>
            <option className="cleanliness-placeholder" selected disabled>
              How filthy is it?
            </option>
            <option>Sparkling</option>
            <option>Dusty</option>
            <option>Rancid</option>
          </select>
        </div>
        <span onClick={() => this.handleSubmit()}className="submit-button" type="submit">
          Add it the the pile...
        </span>
      </div>
    );
  }
}

export default AddItemForm;
