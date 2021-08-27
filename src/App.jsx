import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import "./index.css";

const App = () => (
  <div>
    <div>Shared</div>
    <Header />
    <Menu />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
