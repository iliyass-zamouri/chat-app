import './App.css';
import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Login</h1>
        <div>
          <input type="text" placeholder="email"></input><br></br>
          <input type="text" placeholder="password"></input><br></br>
          <button>Se connecter</button>
        </div>
      </header>
    </div>
  );
  }
}

export default App;
