import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Drumpad2.css";

class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.audioHandler = React.createRef();
    this.onDrumPadClicked = this.onDrumPadClicked.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  

  onDrumPadClicked() {
    const text = this.props.padItem.id.replace(/-/g, " ");
    const audioElm = this.audioHandler.current;

    this.props.updateDisplayText(text);
    audioElm.currentTime = 0;
    audioElm.play();
  }

  onKeyDown(event) {
    const root = ReactDOM.findDOMNode(this);

    if (event.keyCode === this.props.padItem.keyCode) {
      root.classList.add("active");
      this.onDrumPadClicked();
    }
  }

  onKeyUp(event) {
    const root = ReactDOM.findDOMNode(this);

    if (event.keyCode === this.props.padItem.keyCode) {
      setTimeout(() => {
        root.classList.remove("active");
      }, 33);
    }
  }

  componentDidUpdate() {
    this.audioHandler.current.volume = this.props.volumeValue / 100;
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
    document.removeEventListener("keyup", this.onKeyUp);
  }

  render() {
    const padItem = this.props.padItem;

    return (
      <div className="drum-pad" id={padItem.id} onClick={this.onDrumPadClicked}>
        <audio
          className="clip"
          id={padItem.keyTrigger}
          src={padItem.url}
          ref={this.audioHandler}
        />
        {padItem.keyTrigger}
      </div>
    );
  }
}

class FolkMe extends Component {
  render() {
    let svgDetail;
    const position = this.props.position || "right";
    const size = this.props.size || "100px";
    const backgroundColor = this.props.backgroundColor || "#000";
    const color = this.props.color || "#fff";
    const targetURL = this.props.targetURL || "/";
    const ariaLabel = this.props.ariaLabel || "View source on Github";

    if (position === "right") {
      svgDetail = (
        <svg
          width={size}
          height={size}
          viewBox="0 0 250 250"
          style={{
            fill: backgroundColor,
            color: color,
            position: "absolute",
            top: 0,
            border: 0,
            right: 0,
          }}
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: "130px 106px" }}
            className="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            className="octo-body"
          ></path>
        </svg>
      );
    } else if (position === "left") {
      svgDetail = (
        <svg
          width={size}
          height={size}
          viewBox="0 0 250 250"
          style={{
            fill: backgroundColor,
            color: color,
            position: "absolute",
            top: 0,
            border: 0,
            left: 0,
            transform: "scale(-1, 1)",
          }}
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: "130px 106px" }}
            className="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            className="octo-body"
          ></path>
        </svg>
      );
    }

    return (
      <a href={targetURL} className="github-corner" aria-label={ariaLabel}>
        {svgDetail}
      </a>
    );
  }
}

// Ref: http://tholman.com/github-corners/

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const banks = [bankOne, bankTwo];

const volumeHandlerStyle = {
  "--min": 0,
  "--max": 100,
  "--val": 50,
  "--width": "100%",
  "--height": "1.5em",
  "--border-radius": "0.5em",
  "--track-height": "0.75em",
  "--track-border-width": "1px",
  "--track-border-color": "#000",
  "--track-border-style": "solid",
  "--track-color": "#202020",
  "--progress-height": "0.75em",
  "--progress-color": "#35cac5",
  "--thumb-width": "1.15em",
  "--thumb-height": "1.15em",
  "--thumb-border-radius": "40%",
  "--thumb-color": "#202020",
  "--thumb-border": "1px solid #000",
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.volumeHandler = React.createRef();
    this.iconVolume = React.createRef();
    this.displayVolumeValue = React.createRef();
    this.switchBank = React.createRef();
    this.switchBankLabel = React.createRef();

    this.state = {
      bankIndex: 0,
      volumeValue: 50,
      displayText: this.props.displayTextDefault,
    };

    this.onBankChanged = this.onBankChanged.bind(this);
    this.onVolumeChanged = this.onVolumeChanged.bind(this);
    this.onMouseLeaveInput = this.onMouseLeaveInput.bind(this);
    this.updateDisplayText = this.updateDisplayText.bind(this);
  }

  onBankChanged({ target }) {
    const bankIndex = target.checked ? 1 : 0;

    this.setState({
      bankIndex: bankIndex,
      displayText: this.props.displayTextDefault,
    });
  }

  updateDisplayText(text) {
    this.setState({
      displayText: text,
    });
  }

  onVolumeChanged({ target }) {
    const value = Number.parseInt(target.value, 10);
    const volumeHandlerElm = this.volumeHandler.current;
    const iconVolumeElm = this.iconVolume.current;
    const displayVolumeValueElm = this.displayVolumeValue.current;

    volumeHandlerElm.style.setProperty("--val", value);

    if (value === 0) iconVolumeElm.className = "fas fa-volume-off";
    else if (value < 50) iconVolumeElm.className = "fas fa-volume-down";
    else iconVolumeElm.className = "fas fa-volume-up";

    displayVolumeValueElm.style.setProperty("opacity", 1);
    setTimeout(() => {
      displayVolumeValueElm.style.setProperty("opacity", 0);
    }, 1000);

    this.setState({
      volumeValue: value,
    });
  }

  onMouseLeaveInput() {
    setTimeout(() => {
      this.displayVolumeValue.current.style.setProperty("opacity", 0);
    }, 1000);
  }

  componentDidUpdate() {
    if (this.hideVolumeTimeout) {
      clearTimeout(this.hideVolumeTimeout);
      this.hideVolumeTimeout = null;
    } else {
      this.hideVolumeTimeout = setTimeout(() => {
        this.displayVolumeValue.current.style.setProperty("opacity", 0);
      }, 1000);
    }
  }

  render() {
    return (
      <div className="drum" id="drum-machine">
        <div className="drum-display" id="display">
          <h1>{this.state.displayText}</h1>
        </div>

        <div className="drum-control">
          <div className="drum-control-volumn">
            <i className="fas fa-volume-down" ref={this.iconVolume}></i>
            <span> Volume</span>
            <span
              className="drum-control-volumn-value"
              ref={this.displayVolumeValue}
            >
              {" "}
              {this.state.volumeValue}
            </span>
            <input
              type="range"
              onInput={this.onVolumeChanged}
              onMouseLeave={this.onMouseLeaveInput}
              style={volumeHandlerStyle}
              ref={this.volumeHandler}
            />
          </div>
          <div className="drum-control-bank">
            <div>
              {this.state.bankIndex ? "Smooth Piano Kit" : "Heater Kit"}
            </div>
            <label className="switch" title="Switch bank">
              <input
                type="checkbox"
                onChange={this.onBankChanged}
                ref={this.switchBank}
              />
              <span className="slider round" ref={this.switchBankLabel}></span>
            </label>
          </div>
        </div>

        <div className="drum-pads">
          {banks[this.state.bankIndex].map((item, idx) => {
            return (
              <DrumPad
                key={idx}
                padItem={item}
                updateDisplayText={this.updateDisplayText}
                volumeValue={this.state.volumeValue}
              />
            );
          })}
        </div>

        <div className="drum-footer">
          Made by <a href="http://about.phamvanlam.com">Lam Pham</a>.
        </div>

        <FolkMe
          targetURL="https://github.com/completejavascript/drum-machine"
          color="#fff"
          backgroundColor="#35cac5"
          position="right"
          size="100px"
          ariaLabel="View source on Github"
        />
      </div>
    );
  }
}
