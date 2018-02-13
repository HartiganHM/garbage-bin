import React, { Component } from 'react';
import fetchAllItems from '../../helpers/fetchAllItems';
import createNewItem from '../../helpers/createNewItem';
import Garage from '../Garage/Garage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isOpen: 'closed',
      sortOrder: 'A - Z'
    };
  }

  async componentDidMount() {
    const items = await fetchAllItems();
    this.setState({ items });
  }

  handleOpen = () => {
    let isOpen = this.state.isOpen === 'closed' ? 'open' : 'closed';

    this.setState({ isOpen });
  };

  addItemToGarage = item => {
    const newItem = item;
    const items = [...this.state.items, newItem];

    createNewItem(newItem);
    this.setState({ items });
  };

  sortItems = () => {
    let items = this.state.items;
    let sortOrder = this.state.sortOrder;

    if (sortOrder === 'A - Z') {
      sortOrder = 'Z - A';
      items.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return 1;
        }

        if (nameA > nameB) {
          return -1;
        }

        return 0;
      });
    } else {
      sortOrder = 'A - Z';
      items.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }

    this.setState({ items, sortOrder });
  };

  render() {
    return (
      <div className="App">
        <span className="app-header">Garage Bin</span>
        <Garage
          items={this.state.items}
          isopen={this.state.isOpen}
          addItem={this.addItemToGarage}
          sortOrder={this.state.sortOrder}
          sortItems={this.sortItems}
        />
        <span onClick={() => this.handleOpen()} className="open-garage">
          {this.state.isOpen === 'closed' ? 'Open Garage' : 'Close Garage'}
        </span>
      </div>
    );
  }
}

export default App;
