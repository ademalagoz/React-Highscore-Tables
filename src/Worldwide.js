import { React } from "react";
import allScores from "./scores";

export default function Worldwide(props) {
  //Getting all scores as an array
  let worldWideScores = [];
  allScores
    .map((country) => country.scores)
    .map((score) => (worldWideScores = worldWideScores.concat(score)));
  console.log(worldWideScores);
  //Sorting all scores
  worldWideScores.sort((a, b) => {
    if (props.sorting) {
      return a.s < b.s ? 1 : -1;
    } else {
      return a.s > b.s ? 1 : -1;
    }
  });

  return (
    <div className="row mt-5 mx-2 mb-5">
      <div className="col">
        <button
          onClick={props.sortHandle}
          type="button"
          class="btn btn-warning btn-xl"
        >
          Sort Scores
        </button>
        <div className="card">
          <h2 className="d-inline p-2 bg-dark text-white">WorldWide Scores</h2>
          <table className="table table-responsive table-hover table-danger border-primary">
            <thead>
              <tr class="table-primary">
                <th scope="col">
                  <h4>Rank</h4>
                </th>
                <th scope="col">
                  <h4>Name</h4>
                </th>
                <th scope="col">
                  <h4>Score</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {worldWideScores.map((world, index) => {
                return (
                  <tr>
                    <td>
                      <h5>{index + 1}</h5>
                    </td>
                    <td>{world.n.toUpperCase()}</td>
                    <td>{world.s}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
