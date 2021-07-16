import React, { useEffect, useState } from "react";
//tick tock this is my clock
function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div style={{ fontSize: "20px", margin: "60px",color:"blue" }}><h2>Current Time</h2>{clockState}</div>;
}

export default Clock;