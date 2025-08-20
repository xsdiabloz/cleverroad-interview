import CrewList from "./components/crewList/CrewList";
import IssPosition from "./components/issPosition/IssPosition";
import UtcClock from "./components/utcClock/UtcClock";
import "../src/app.css";

function App() {
  return (
    <div className="app-container">
      <div className="left">
        <IssPosition />
      </div>

      <div className="right">
        <div className="utc-clock-main">
          <UtcClock />
        </div>
        <CrewList />
      </div>
    </div>
  );
}

export default App;
