import React from "react";
import Social from "./Social";

export default function Header(): JSX.Element {
  return (
    <header className="App-header">
      <div className="name">
        <h4>Dallas Opelt</h4>
      </div>
      <div className="links">
        <Social icon="github" />
        <Social icon="linkedin" />
        <Social icon="hackerrank" />
      </div>
    </header>
  );
}