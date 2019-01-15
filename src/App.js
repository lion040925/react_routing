import React, { Component } from "react";
import "./App.css";
import SidebarExample from "./router/sidebarExample";
import BasicExample from "./router/basicExample";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Routing test </h1>
        {/*
          주석
          <SidebarExample />
          */}

        <BasicExample />
      </div>
    );
  }
}

export default App;
