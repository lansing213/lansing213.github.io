
const e = React.createElement;

class LikeButton extends React.Component {
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

ReactDOM.render(React.createElement(LikeButton), document.querySelector('#like_button_container'));
