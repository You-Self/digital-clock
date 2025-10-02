import { useState, useEffect } from "react";
import './CurrentTime.css';

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <h1 className="time hours">
          {time.getHours().toString().padStart(2, '0')}:
        </h1>
        <h1 className="time minutes">
          {time.getMinutes().toString().padStart(2, '0')}
        </h1>
        <h1 className="time seconds">
          {time.getSeconds().toString().padStart(2, '0')}
        </h1>
    </>
  )
}

export default CurrentTime;
