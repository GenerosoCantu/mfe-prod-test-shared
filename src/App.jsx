import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import "./index.css";

const App = () => (
  <div>
    <Header />
    <Menu />
    <div>I'm the header app</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
