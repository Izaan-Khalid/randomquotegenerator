import React from 'react';
import './index.css';
import Quotes from "./Quote";

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
    document.body.style.backgroundColor = Quotes[this.state.index].color;
    return(
      <div id = "quote-box">
        <h2 id = "text" style={{color: Quotes[this.state.index].color}}><i class="fas fa-quote-left"></i> {Quotes[this.state.index].text}</h2>
        <p id = "author" style={{color: Quotes[this.state.index].color}}>- {Quotes[this.state.index].author}</p>
        <div id = "buttons">
          <button id = "new-quote" onClick={this.handleClick} style={{backgroundColor: Quotes[this.state.index].color}}>New Quote</button>
          <a id = "tweet-quote" href='https://twitter.com/intent/tweet?text=hello%20world' target = "_blank" rel="noreferrer" style={{backgroundColor: Quotes[this.state.index].color}}><i class = "fab fa-twitter"></i></a>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
