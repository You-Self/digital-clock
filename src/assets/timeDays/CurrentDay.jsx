import { useState, useEffect } from "react";
import './CurrentDay.css';

function CurrentDay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <>
        <h1 className="time date">
          {time.getDate().toString()}
        </h1>
        <h1 className="time day">
          {dayNames[time.getDay().toString()]}
        </h1>
        <h1 className="time month">
          {monthNames[time.getMonth().toString()]}
        </h1>
        {/* <h1 className="time year">
          {time.getFullYear()}
        </h1> */}
    </>
  )
}

export default CurrentDay
