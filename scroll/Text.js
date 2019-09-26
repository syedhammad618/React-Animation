import React, { Component } from "react";
import { Wave, Random } from "react-animated-text";
import "./Style.css";

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: false
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ pause: !this.state.pause });
    }, 3000);
  }
  render() {
    return (
      <div className="card db">
        <div className="col s12 m2 ">
          <h1 className="io">
            <Wave
              text={this.props.name}
              effect="fadeOut"
              effectDirection="up"
              delay={1.0}
            />
            <Wave
              text="BYE BYE"
              effect="verticalFadeOut"
              paused={this.state.pause}
              delay={2.0}
              speed={5.0}
            />
          </h1>
        </div>
      </div>
    );
  }
}

// {
//   /* <Random
//    text={this.props.children}
//    paused={this.state.paused}
//    effect="verticalFadeOut"
//    effectDirection="down"
//    effectChange={3.0}
//  /> */
// }
