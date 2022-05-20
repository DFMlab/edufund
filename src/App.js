import logo from './logo.svg';
import './App.css';

import { ContractKitProvider } from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function WrappedApp() {
  return (
    <ContractKitProvider
      dapp={{
        name: "My awesome dApp",
        description: "My awesome description",
        url: "https://example.com",
      }}
    >
      <App />
    </ContractKitProvider>
  );
}

export default WrappedApp;
