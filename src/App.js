import React from "react";

import "./App.css";

import HeaderComponent from "./components/header/header.component";
import FeedComponent from "./components/feed/feed.component";
import FooterComponent from "./components/footer/footer.component";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <FeedComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
