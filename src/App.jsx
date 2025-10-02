import CurrentTime from './assets/timeDigits/CurrentTime';
import CurrentDay from './assets/timeDays/CurrentDay';
import SecondsSquare  from './assets/Seconds/SecondsSquare';
import './App.css';

function App() {

  return (
    <div className="app">
      <div className="clock">
        <SecondsSquare />
        <div className="center">
          <CurrentTime />
        </div>
        <div className="bottom">
          <CurrentDay />
        </div>
      </div>
    </div>
  )
}

export default App
