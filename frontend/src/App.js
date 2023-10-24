import logo from './logo.svg';
import './App.css';

export const App = () => {
  return(
    <div className="App">
      <header className="App-header">
        <h1>desde App react (index)</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esto se puede edtar <code>Hola</code> como.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Tello vargas
        </a>
      </header>
    </div>
  );
}

export default App;
