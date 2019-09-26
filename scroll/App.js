import React, { Component } from "react";
import Anime from "./Anime";
import Text from "./Text";

class App extends Component {
  render() {
    return (
      <div>
        <Text name="ProtoDrop" />
        <Anime />
      </div>
    );
  }
}

export default App;
