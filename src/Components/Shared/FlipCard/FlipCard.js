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
            <div onClick={this.handleClick}>
                <ReactCardFlip containerClassName={styles.card} isFlipped={this.state.isFlipped}>
                  <div ref={this.front}>{this.props.children[0]}</div>
                  <div ref={this.back}>{this.props.children[1]}</div>
                </ReactCardFlip>
            </div>
        )
    }
  }

export default FlipCard;