import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-red-500">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>LT FRONTEND</code> make changes and save to reload.
          Goodluck
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
