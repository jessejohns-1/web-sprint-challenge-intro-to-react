import React, { useEffect, useState } from "react";
import styled from "styled-components"
//tick tock this is my clock


const Clockdiv = styled.div`
    display:flex;
    align-items: center;
  animation-name: spin;
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <Clockdiv>
      <div style={{ fontSize: "20px", margin: "60px",color:"blue",background:'gold'}}><h2>Current Time spinning</h2>{clockState}</div>
      </Clockdiv>
}

export default Clock;