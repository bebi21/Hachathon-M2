import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShowAll from "./components/ShowAll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShowAll />
    </>
  );
}

export default App;
