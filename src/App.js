import React, {Component} from 'react';
import './App.css';
import User from './User/User'

class App extends Component {
  state = {
    user:[
      {name: 'Tomoya'},
      {name: 'Yoko'},
      {name: 'Haru'},
      {name: 'Araki'}
    ]
  }

  render() {
    return (
      <div className="App">
        <User 
        name={this.state.user[0].name}
        />
        <User 
        name={this.state.user[1].name}
        />
        <User 
        name={this.state.user[2].name}
        />
        <User 
        name={this.state.user[3].name}
        />
      </div>
    );
  }
}

export default App;
