import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  constructor() {
    super();
    this.state = {
      details: false
    };
  }

  toggleDetails = () => {
    const details = this.state.details ? false : true;

    this.setState({ details });
  };

  render(props) {
    const { name, reason, cleanliness } = this.props.data;

    const cleanlinessDropdown = ['Sprakling', 'Dusty', 'Rancid'].map(
      (option, index) => {
        let isSelected = false;

        if (cleanliness === option) {
          isSelected = true;
        }

        return (
          <option key={index} selected={isSelected}>
            {option}
          </option>
        );
      }
    );

    const itemClass = this.state.details ? 'Item' : 'Item hidden-details';
    const detailButtonText = this.state.details ? 'Hide Details' : 'Show Details';

    return (
      <div className={itemClass}>
        <span className="item-name">{name}</span>
        {this.state.details && (
          <div>
            <span className="item-property">
              <span className="section-header">Reason for hoading</span>
              <span className="section-text">{reason}</span>
            </span>
            <span className="item-property">
              <span className="section-header">Is it clean?</span>
              <select className="section-text">{cleanlinessDropdown}</select>
            </span>
          </div>
        )}
        <span class="toggle-details" onClick={() => this.toggleDetails()}>
          {detailButtonText}
        </span>
      </div>
    );
  }
}

export default Item;
