import React, { Component } from 'react';
import fetchAllItems from '../../helpers/fetchAllItems';
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
        GARBAGE
      </div>
    );
  }
}

export default App;
