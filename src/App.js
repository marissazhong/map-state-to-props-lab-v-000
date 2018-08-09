import React, { Component } from 'react';
import UserInput from './components/UserInput'
import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <Users />
      </div>
    );
  }
}

export default App;
