//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore ] = useState(0);
  const [awayScore, setAwayScore ] = useState(0);
  const touchdownHome = e => {
    setHomeScore(homeScore + 7)
  }
  const touchdownAway = e => {
    setAwayScore(awayScore + 7)
  }
  const fieldHome = e => {
    setHomeScore(homeScore + 3)
  }
  const fieldAway = e => {
    setAwayScore(awayScore + 3)
  }
  const [quarter, setQuarter] = useState(0)
  const nextQuarter = e => {
    if (quarter < 4){
      setQuarter(quarter + 1)
    }
    else { setQuarter("Game over")}
    
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Bears</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:00</div>
          <div className ="timer">{quarter}</div>
          <button onClick={nextQuarter}className = "changeQuarter">Change Quarter</button>
          <div className="away">
            <h2 className="away__name">Packers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={touchdownHome} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={fieldHome}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={touchdownAway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={fieldAway}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
