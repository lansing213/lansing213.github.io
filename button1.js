
class Button1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  render() {
    if (this.state.clicked == true) {
      window.open("https://github.com/lansing213/Notebook-");
    }
    return (
      <button id="button1" onClick={() => this.setState({ clicked: true })}>
        View code
      </button>
      
    );

  }
  
}
class Button2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked == true) {
      window.open("https://github.com/lansing213/Weather-App");
    }
    return (
      <button id="button1" onClick={() => this.setState({ clicked: true })}>
        View code
      </button>
      
    );

  }
  
}
class Button3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked == true) {
      window.open("https://github.com/lansing213/quiz-app");
    }
    return (
      <button id="button1" onClick={() => this.setState({ clicked: true })}>
        View code
      </button>
      
    );

  }
  
}
ReactDOM.render(React.createElement(Button1), document.querySelector('#button1_container'));
ReactDOM.render(React.createElement(Button2), document.querySelector('#button2_container'));
ReactDOM.render(React.createElement(Button3), document.querySelector('#button3_container'));