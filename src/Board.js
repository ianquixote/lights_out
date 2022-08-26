import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 30
  }

  constructor(props) {
    super(props);

    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };

    this.createBoard = this.createBoard.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({hasWon: false, board: this.createBoard()});
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let board;
    let {ncols, nrows} = this.props;
    do {
      board = [];
      for (let count = 0; count < nrows; count++) {
        board.push(Array(ncols).fill('').map(item => Math.floor(Math.random() * 100) < this.props.chanceLightStartsOn));
      }
    } while (!this.isSolvable(board))
    return board
  }

  /** handle changing a cell: update board & determine if winner */
  flipCellsAround(coord) {
    console.log(coord);
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coordinate is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    function flipAdjacent(y, x) {
      flipCell(y, x); //flip selected cell
      flipCell(y - 1, x); //flip top cell
      flipCell(y, x + 1); //flip right cell
      flipCell(y + 1, x); //flip bottom cell 
      flipCell(y, x - 1); //flip left cell
    }

    flipAdjacent(y, x);

    // win when every cell is turned off, i.e. false
    let hasWon = this.state.board.flat().every(item => !item);

    this.setState({board, hasWon});
  }

  isSolvable(board) {
    board = board.map(arr => [...arr]);
    /*
    board is an array of arrays containing boolean values
    example:
    [
      [true, false, true, false, true],
      [false, false, true, true, true],
      [true, true, true, false, false],
      [true, false, true, false, true],
      [false, false, true, true, true],
    ]

    Algorithm:
    moving through each row until the second to last,
      if true, flip the square below it.
    if the last row is all false, return true
    */

    for (let idx1 = 0; idx1 <= board.length - 2; idx1++) {
      for (let idx2 = 0; idx2 < board[idx1].length; idx2++) {
        if (board[idx1][idx2]) /*tests if current cell is true*/ {
          function flipCell(y, x) {
            if (x >= 0 && x < board[idx1].length && y >= 0 && y < board.length) {
              board[y][x] = !board[y][x];
            }
          }
          flipCell(idx1 + 1, idx2); //flip lower cell
          flipCell(idx1, idx2); //flip current cell (top of lower cell)
          flipCell(idx1 + 1, idx2 + 1); //flip lower right cell
          flipCell(idx1 + 2, idx2); //flip lower bottom cell 
          flipCell(idx1 + 1, idx2 - 1); //flip lower left cell
        }
      }
    }
    return board[board.length - 1].every(item => item === false);
  }

  render() {
    if (this.state.hasWon) {
      let emptyRow = <tr>
        {Array(this.props.ncols).fill('').map(el => <Cell isDisabled/>)}
      </tr>
      return (
        <div className={'Board'}>
          <h1>You Won!</h1>
          <table>
            <tbody>
              {emptyRow}
              {emptyRow}
              <tr>
                {Array(this.props.ncols).fill('').map((el, idx) => idx === 2 ? <button onClick={this.clickHandler}>Play Again</button> : <Cell isDisabled/>)}
              </tr>
              {emptyRow}
              {emptyRow}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div className={'Board'}>
          <h1>Lights Out!</h1>
          <table>
            <tbody>
              {this.state.board.map((row, rowIdx) => {
                return (
                  <tr key={rowIdx} className={'Row'}>
                    {row.map((col, colIdx) => {
                      let coord = `${rowIdx}-${colIdx}`;
                      return (
                          <Cell key={coord} flipCellsAroundMe={() => this.flipCellsAround(coord)} isLit={col}/>
                      )
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h3>Turn off all the lights to win the game.</h3>
        </div>
      )
    }
  }
}


export default Board;
