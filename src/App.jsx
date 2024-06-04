import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  setInterval(() => {
    window.location.reload();
  }, 10000);

  return (
    <>
      <div className="body">
        <div className="d-flex flex-column">
          <div className="lights"></div>
          <div className="lights1"></div>
          <div className="lights2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
