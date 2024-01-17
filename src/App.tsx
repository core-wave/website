import React from "react";
import logo from "./corewave.png";
import "./App.css";

function App() {
  return (
    <div className="App flex flex-col gap-6 min-h-screen w-full bg-slate-950 items-center justify-center">
      <img src={logo} className="max-w-60" />
      <p className="text-slate-200 text-xl">Coming soon</p>
    </div>
  );
}

export default App;
