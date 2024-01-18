import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App flex flex-col gap-2 min-h-screen w-full bg-radial items-center justify-center">
      <img
        src={logo}
        className="max-w-48 transition hover:scale-110 ease-in-out duration-600"
        alt="logo"
      />
      <p className="text-slate-200 text-2xl font-body font-medium">corewave</p>
    </div>
  );
}

export default App;
