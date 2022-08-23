import React, {Component} from 'react'
import "./Cell.css"

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    // call up to the board component to flip cells around this cell
    this.props.flipCellsAroundMe();
  }

  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    if (this.props.isDisabled) {
      return (
        <td className={classes} />
      )
    } else {
      return (
        <td className={classes} onClick={this.handleClick} />
      )
    }
  }
}


export default Cell