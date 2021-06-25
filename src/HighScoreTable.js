import { useState } from "react";
import PlayerScore from "./PlayerScore";
import Worldwide from "./Worldwide";
import allScores from "./scores";

const HighScoreTable = () => {
  const [sorting, setSorting] = useState(false);

  function sortHandle() {
    setSorting(!sorting);
  }

  //Sorting countries as Alphabetically and getting whole data
  let sortCountryNames = allScores.sort((a, b) => {
    return b.name > a.name ? -1 : 1;
  });

  //Getting only country name and scores Array
  return (
    <div>
      <Worldwide sortHandle={sortHandle} sorting={sorting} />
      <h1 className="d-inline px-5 py-1 bg-dark text-white ">Country Scores</h1>

      {sortCountryNames.map((country, index) => {
        return (
          <div key={index}>
            <h2>{country.name}</h2>
            <PlayerScore
              scores={country.scores}
              sorting={sorting}
              sortHandle={sortHandle}
            />
          </div>
        );
      })}
    </div>
  );
};
export default HighScoreTable;
