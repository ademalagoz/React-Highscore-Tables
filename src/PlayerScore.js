import allCountryScores from "./scores";

const PlayerScore = () => {
  return (
    <div>
      {allCountryScores

        .sort((country1, country2) => {
          return country1.name.localeCompare(country2.name);
        })

        .map((props1, index1) => {
          return (
            <div className="countryTable">
              <h3 key={index1}> HIGH SCORES: {props1.name} </h3>

              {props1.scores
                .sort((a, b) => {
                  return b.s - a.s;
                })

                .map((props2, index2) => {
                  return (
                    <table>
                      <tbody>
                        <tr key={index2}>
                          <td id="name"> {props2.n.toUpperCase()}</td>
                          <td id="score"> {props2.s}</td>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};
export default PlayerScore;
