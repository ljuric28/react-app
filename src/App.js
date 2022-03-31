import logo from './logo.svg';
import './App.css';
import { arrayHelpers, idHelpers } from "./libary/helpers";

console.log(arrayHelpers.getRandomElement([1, 2, 3]));

function RepositoriLink() {
  return(
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Github repository link
  </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>algebra-example-react-app</h1>
        <p>Your unique ID is: {idHelpers.generateID()}</p>
       <RepositoriLink/>
      </header>
    </div>
  );
}

export default App;
