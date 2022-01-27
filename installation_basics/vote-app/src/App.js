import './App.css';
import Vote from './components/vote.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <Vote candidateName="Manuel" candidateAddress="Thüringen"/>
          <Vote candidateName="David" candidateAddress="Düns"/>
          <Vote candidateName="Samuel" candidateAddress="Bludenz"/>
        </div>
      </header>
    </div>
  );
}

export default App;
