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
      isOpen: 'closed'
    }
  }

  async componentDidMount () {
    const items = await fetchAllItems();
    this.setState({items})
  }

  handleOpen =() => {
    let isOpen = this.state.isOpen === 'closed' ? 'open' : 'closed';

    this.setState({isOpen})
  }

  addItemToGarage = (item) => {
    
  }

  render() {
    return (
      <div className="App">
        <span className="app-header">Garage Bin</span>
        <Garage items={this.state.items} isopen={this.state.isOpen}/>
        <span onClick={() => this.handleOpen()}className="open-garage">Open Garage</span>
      </div>
    );
  }
}

export default App;
