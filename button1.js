


class Button1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked == true) {
      window.open("https://github.com/lansing213/Notebook-");
    }
    // return React.createElement(
    //   'button',
    //   { onClick: () => this.setState({ clicked: true }) },
        
    //   'View code'

    //  );
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
      window.open("https://github.com/CMPUT301W20T18/Bee");
    }
    // return React.createElement(
    //   'button',
    //   { onClick: () => this.setState({ clicked: true }) },
        
    //   'View code'

    //  );
    return (
      <button id="button1" onClick={() => this.setState({ clicked: true })}>
        View code
      </button>
      
    );

  }
  
}

ReactDOM.render(React.createElement(Button1), document.querySelector('#button1_container'));
ReactDOM.render(React.createElement(Button2), document.querySelector('#button2_container'));