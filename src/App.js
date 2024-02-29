import React from "react";

import "./App.css";

import HeaderComponent from "./components/header/header.component";
import FeedComponent from "./components/feed/feed.component";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <FeedComponent />
    </div>
  );
}

export default App;
