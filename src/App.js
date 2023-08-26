import { useState, useEffect } from "react";
import { HeatGraph } from "./heatgraph/HeatGraph";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => setValue(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className={"App"}>
      <h5>Hello HeatGraph</h5>
      <div style={{ width: "250px" }}>
        <HeatGraph valuePercentage={100} />
        <br />
        <HeatGraph valuePercentage={75} />
        <br />
        <HeatGraph valuePercentage={50} />
        <br />
        <HeatGraph valuePercentage={25} />
        <br />
        <HeatGraph valuePercentage={0} />
        <br />
      </div>
      <br />
      <h5>With Animation</h5>
      <div style={{ width: "250px" }}>
        <HeatGraph valuePercentage={value} />
      </div>
    </div>
  );
}

export default App;
