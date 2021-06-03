import React from "react";
import Switch from "@material-ui/core/Switch";
import "./Drumpad.css";
import ContinuousSlider from "./ContinuousSlider";

/*function addClass(cls) {
  var element = document.getElementById(cls);
  
  if (element.parentNode.classList) {
    element.parentNode.classList.toggle("active");
  } else {
    var classes = element.parentNode.className.split(" ");
    var i = classes.indexOf("active");

    if (i >= 0) {
      classes.splice(i, 1);
    } else {
      classes.push("active");
      element.parentNode.className = classes.join(" ");
    }
  }
}
*/
//const bankState = ["Heater Kit", "Smooth Piano Kit"];

class Drumpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankState: 0,
      Update: "",
      kit: 0,
      name: 1,
      volume: 0,
      power: false,
    };
    this.musicSrc = {
      Q: [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        "Heater Kit",
        "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        "Chord 1",
      ],
      W: [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        "Heater 2",
        "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        "Chord 2",
      ],
      E: [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        "Heater 3",
        "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        "Chord 3",
      ],
      A: [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        "Heater 4",
        "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        "Shaker",
      ],
      S: [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        "Clap",
        "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        "Open HH",
      ],
      D: [
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        "Open HH",
        "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        "Closed HH",
      ],
      Z: [
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        "Kick n' Hat",
        "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        "Punchy Kick",
      ],
      X: [
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        "Kick",
        "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        "Side Stick",
      ],
      C: [
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        "Closed HH",
        "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        "Snare",
      ],
    };
    // this.childRef = React.createRef();
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleUp = this.handleUp.bind(this);
    // const childRef = React.useRef(null);
  }

  handleUp(event) {
    switch (event.key.toUpperCase()) {
      case "Q":
        document
          .getElementById(event.key.toUpperCase())
          .parentNode.classList.remove("active");
        break;
      case "W":
        document
          .getElementById(event.key.toUpperCase())
          .parentNode.classList.remove("active");
        break;
      case "E":
        document
          .getElementById(event.key.toUpperCase())
          .parentNode.classList.remove("active");
        break;
      case "A":
        document
          .getElementById(event.key.toUpperCase())
          .parentNode.classList.remove("active");
        break;
      case "S":
        document
          .getElementById(event.key.toUpperCase())
          .parentNode.classList.remove("active");
        break;
      case "D":
        document
          .getElementById(event.key.toUpperCase())
          .parentNode.classList.remove("active");
        break;
      case "Z":
        document
          .getElementById(event.key.toUpperCase())
          .parentNode.classList.remove("active");
        break;
      case "X":
        document
          .getElementById(event.key.toUpperCase())
          .parentNode.classList.remove("active");
        break;
      case "C":
        document
          .getElementById(event.key.toUpperCase())
          .parentNode.classList.remove("active");
        break;
      default:
    }
    /* setTimeout(() => {
    }, 50) */
  }

  componentDidMount() {
    // document.getElementById("Q").parentNode.focus();
    document.addEventListener("click", () => {
      document.getElementById("Q").parentNode.focus();
    });
    document.addEventListener("keyup", this.handleUp);
    // document.addEventListener("click", this.handleClick);
    // document.addEventListener("change", this.handleVolume);
  }

  componentDidUpdate() {
    window.audio_element = this.state.volume / 100;
  }

  handlePower() {
    console.log("You are in handlePower");
    this.state.power
      ? this.setState(() => {
          return { power: false, volume: 0 };
        })
      : this.setState(() => {
          return { power: true, volume: 0.5 };
        });
  }

  handleVolume(value) {
    console.log("You are in handleVolume");
    this.setState(() => {
      return { volume: value };
    });
  }

  addClass(key) {
    document.getElementById(key).parentNode.classList.add("active");
    this.setState(() => {
      return { Update: this.musicSrc[key][this.state.name] };
    });
    window.audio_element = document.getElementById(key);
    window.audio_element.src = this.musicSrc[key][this.state.kit];
    window.audio_element.currentTime = 0;
    window.audio_element.volume = this.state.volume;
    window.audio_element.play();
  }

  handleKeyEvent(e) {
    var myKey = e.key.toUpperCase();
    switch (myKey) {
      case "Q":
        this.addClass(myKey);
        break;
      case "W":
        this.addClass(myKey);
        break;
      case "E":
        this.addClass(myKey);
        break;
      case "A":
        this.addClass(myKey);
        break;
      case "S":
        this.addClass(myKey);
        break;
      case "D":
        this.addClass(myKey);
        break;
      case "Z":
        this.addClass(myKey);
        break;
      case "X":
        this.addClass(myKey);
        break;
      case "C":
        this.addClass(myKey);
        break;
      default:
        console.log(`You pressed ${e.key}`);
    }
  }

  handleClick(id) {
    this.addClass(id);
  }

  handleChange() {
    // console.log(document.getElementById("slider").value);
    if (this.state.bankState === 0) {
      this.setState(() => {
        return { bankState: 1, Update: "Smooth Piano Kit", kit: 2, name: 3 };
      });
    } else {
      if (this.state.bankState > 0) {
        this.setState(() => {
          return { bankState: 0, Update: "Heater Kit", kit: 0, name: 1 };
        });
      } else {
        this.setState(() => {
          return { bankState: 1, Update: "Smooth Piano Kit", kit: 2, name: 3 };
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div id="drum-machine">
          <div id="display">
            <div id="wordpad">
              <div
                className="drum-pad"
                onKeyDown={this.handleKeyEvent}
                onKeyUp={this.handleUp}
                onMouseDown={() => {
                  this.handleClick("Q");
                }}
                onMouseUp={() => {
                  document
                    .getElementById("Q")
                    .parentNode.classList.remove("active");
                }}
                tabIndex={0}
              >
                Q
                <audio className="clip" id="Q">
                  <source
                    src={this.musicSrc["Q"][this.state.kit]}
                    type="audio/ogg"
                  ></source>
                  <source
                    src={this.musicSrc["Q"][this.state.kit]}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
              <div
                className="drum-pad"
                onKeyDown={this.handleKeyEvent}
                onMouseDown={() => {
                  this.handleClick("W");
                }}
                onMouseUp={() => {
                  document
                    .getElementById("W")
                    .parentNode.classList.remove("active");
                }}
                tabIndex={1}
              >
                W
                <audio className="clip" id="W">
                  <source
                    src={this.musicSrc["W"][this.state.kit]}
                    type="audio/ogg"
                  ></source>
                  <source
                    src={this.musicSrc["W"][this.state.kit]}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
              <div
                className="drum-pad"
                onKeyDown={this.handleKeyEvent}
                onMouseDown={() => {
                  this.handleClick("E");
                }}
                onMouseUp={() => {
                  document
                    .getElementById("E")
                    .parentNode.classList.remove("active");
                }}
                tabIndex={2}
              >
                E
                <audio className="clip" id="E">
                  <source
                    src={this.musicSrc["E"][this.state.kit]}
                    type="audio/ogg"
                  ></source>
                  <source
                    src={this.musicSrc["E"][this.state.kit]}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
              <div
                className="drum-pad"
                onKeyDown={this.handleKeyEvent}
                onMouseDown={() => {
                  this.handleClick("A");
                }}
                onMouseUp={() => {
                  document
                    .getElementById("A")
                    .parentNode.classList.remove("active");
                }}
                tabIndex={3}
              >
                A
                <audio className="clip" id="A">
                  <source
                    src={this.musicSrc["A"][this.state.kit]}
                    type="audio/ogg"
                  ></source>
                  <source
                    src={this.musicSrc["A"][this.state.kit]}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
              <div
                className="drum-pad"
                onKeyDown={this.handleKeyEvent}
                onMouseDown={() => {
                  this.handleClick("S");
                }}
                onMouseUp={() => {
                  document
                    .getElementById("S")
                    .parentNode.classList.remove("active");
                }}
                tabIndex={4}
              >
                S
                <audio className="clip" id="S">
                  <source
                    src={this.musicSrc["S"][this.state.kit]}
                    type="audio/ogg"
                  ></source>
                  <source
                    src={this.musicSrc["S"][this.state.kit]}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
              <div
                className="drum-pad"
                onKeyDown={this.handleKeyEvent}
                onMouseDown={() => {
                  this.handleClick("D");
                }}
                onMouseUp={() => {
                  document
                    .getElementById("D")
                    .parentNode.classList.remove("active");
                }}
                tabIndex={5}
              >
                D
                <audio className="clip" id="D">
                  <source
                    src={this.musicSrc["D"][this.state.kit]}
                    type="audio/ogg"
                  ></source>
                  <source
                    src={this.musicSrc["D"][this.state.kit]}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
              <div
                className="drum-pad"
                onKeyDown={this.handleKeyEvent}
                onMouseDown={() => {
                  this.handleClick("Z");
                }}
                onMouseUp={() => {
                  document
                    .getElementById("Z")
                    .parentNode.classList.remove("active");
                }}
                tabIndex={6}
              >
                Z
                <audio className="clip" id="Z">
                  <source
                    src={this.musicSrc["Z"][this.state.kit]}
                    type="audio/ogg"
                  ></source>
                  <source
                    src={this.musicSrc["Z"][this.state.kit]}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
              <div
                className="drum-pad"
                onKeyDown={this.handleKeyEvent}
                onMouseDown={() => {
                  this.handleClick("X");
                }}
                onMouseUp={() => {
                  document
                    .getElementById("X")
                    .parentNode.classList.remove("active");
                }}
                tabIndex={7}
              >
                X
                <audio className="clip" id="X">
                  <source
                    src={this.musicSrc["X"][this.state.kit]}
                    type="audio/ogg"
                  ></source>
                  <source
                    src={this.musicSrc["X"][this.state.kit]}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
              <div
                className="drum-pad"
                onKeyDown={this.handleKeyEvent}
                onMouseDown={() => {
                  this.handleClick("C");
                }}
                onMouseUp={() => {
                  document
                    .getElementById("C")
                    .parentNode.classList.remove("active");
                }}
                tabIndex={8}
              >
                C
                <audio className="clip" id="C">
                  <source
                    src={this.musicSrc["C"][this.state.kit]}
                    type="audio/ogg"
                  ></source>
                  <source
                    src={this.musicSrc["C"][this.state.kit]}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
            </div>
            <div id="volumepad">
              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                Power
              </span>
              <Switch color="primary" onClick={this.handlePower} />
              <div id="reaction-box">
                <span>{this.state.Update}</span>
              </div>
              <ContinuousSlider
                id="slider"
                value={this.state.volume}
                // ref={this.childRef}
                handleChange={this.handleVolume}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                Bank
              </span>
              {
                <Switch
                  color="primary"
                  onClick={this.handleChange}
                  tabIndex={0}
                />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drumpad;
