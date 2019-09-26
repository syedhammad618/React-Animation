import React, { Component } from "react";
import ReactSnapScroll from "react-snap-scroll";
import "./Style.css";

export default class Anime extends Component {
  render() {
    return (
      <div className="animation">
        <ReactSnapScroll transition="move-top-bottom-stagger">
          <div className="card-content">
            <div id="pink"></div>
          </div>
          <div id="yellow"></div>
          <div id="blue"></div>
        </ReactSnapScroll>
      </div>
    );
  }
}
