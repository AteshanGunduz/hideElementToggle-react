import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [display, setDisplay] = useState(true);
  const handleB = () => {
    setDisplay(!display);
  };
  return (
    <>
      <button onClick={handleB}>Hide Element Below</button>

      <div style={{ display: display ? "block" : "none" }}>
        Toggle Challenge
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
