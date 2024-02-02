import React from "react";
import './Card.css';

export class Card extends React.Component {

  /*constructor() {
    super();
    this.state = {isOpened: false};
  }*/

  cardClickHandler(item) {
    // this.setState({isOpened: !this.props.isOpened});
    this.props.onChoice(item);
  }

  render() {

    return (
      <div className={'card ' + (this.props.isShowed ? 'opened' : 'closed')} onClick={this.cardClickHandler.bind(this, this.props.item)}>

        <div className="card-inner card-front">
          <img src={'/images/' + this.props.item.image} alt={this.props.item.name}/>
        </div>

        <div className="card-inner card-back">
          <img src={'images/question.svg'} alt='Question Mark'/>
        </div>

      </div>
    )
  }
}