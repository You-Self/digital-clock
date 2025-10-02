import { useState, useEffect } from "react";
import "./SecondsSquare.css";

function SecondsSquare() {
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="seconds-square">
      {Array.from({ length: 60 }).map((_, i) => {
        let style = {};
        const size = 450;
        const perSide = 15;

        if (i < perSide) {
          style = { top: 0, left: (i / perSide) * size };
        } else if (i < perSide * 2) {
          style = { top: ((i - perSide) / perSide) * size, left: size };
        } else if (i < perSide * 3) {
          style = { top: size, left: size - ((i - perSide * 2) / perSide) * size };
        } else {
          style = { top: size - ((i - perSide * 3) / perSide) * size, left: 0 };
        }

        return (
          <div
            key={i}
            className={`tick ${i <= seconds ? "active" : ""}`}
            style={style}
          />
        );
      })}
    </div>
  );
}

export default SecondsSquare;
