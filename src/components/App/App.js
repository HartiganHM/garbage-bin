import React, { Component } from 'react';
import fetchAllItems from '../../helpers/fetchAllItems';
import Garage from '../Garage/Garage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  async componentDidMount () {
    const items = await fetchAllItems();
    this.setState({items})
  }

  render() {
    return (
      <div className="App">
        <span className="app-header">Garage Bin</span>
        <Garage items={this.state.items} />
        <span className="open-garage">Open Garage</span>
      </div>
    );
  }
}

export default App;
