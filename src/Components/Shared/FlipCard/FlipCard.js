import styles from './FlipCard.module.scss'
import React from "react"; 
import ReactCardFlip from 'react-card-flip';


class FlipCard extends React.Component {
    constructor(props) {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);

    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    
    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <div className="cardFace" onClick={this.handleClick}>{this.props.children[0]}</div>
                <div className="cardFace" onClick={this.handleClick}>{this.props.children[1]}</div>
            </ReactCardFlip>
        )
    }
  }

export default FlipCard;