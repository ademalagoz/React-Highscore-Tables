import "./App.css";

import HighScoreTable from "./HighScoreTable";

function App() {
  return (
    <div className="App">
      <div className="Header-container">
        <h1 className="Header-title d-inline p-2 bg-primary text-white">
          High Scores per Country
        </h1>
      </div>

      <HighScoreTable />
    </div>
  );
}

export default App;
