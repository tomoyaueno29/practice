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

  switchNameHandler = (event) => {
    this.setState({
      user:[
        {name: event.target.value},
        {name: event.target.value},
        {name: event.target.value},
        {name: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <User 
        name={this.state.user[0].name}
        click={this.switchNameHandler}

        />
        <User 
        name={this.state.user[1].name}
        click={this.switchNameHandler}
        />
        <User 
        name={this.state.user[2].name}
        click={this.switchNameHandler}
        />
        <User 
        name={this.state.user[3].name}
        click={this.switchNameHandler}
        />
      </div>
    );
  }
}

export default App;
