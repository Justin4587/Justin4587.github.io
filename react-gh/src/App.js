import logo from './horsefish.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jackson Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Something better be differen!</p>

        <label htmlFor="email">Email:</label>
        <input name="email" id="email"></input>
        <label htmlFor="password">Password: </label>
        <input name="password" id="password"></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
