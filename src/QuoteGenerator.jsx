import React from 'react';
import './index.css';
import Quotes from "./Quote"

class QuoteGenerator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: Math.floor(Math.random()*16)
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      index: Math.floor(Math.random()*15)
    });
  }
  render() {
    return(
      <div id = "quote-box">
        <h2 id = "text">{Quotes[this.state.index].text}</h2>
        <p id = "author">- {Quotes[this.state.index].author}</p>
        <button id = "new-quote" onClick={this.handleClick}>New Quote</button>
        <a id = "tweet-quote" href='https://twitter.com/intent/tweet?text=hello%20world' target = "_blank" rel="noreferrer">test</a>
      </div>
    );
  }
}

export default QuoteGenerator;
