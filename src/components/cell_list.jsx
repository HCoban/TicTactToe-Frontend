import React from "react";
import Cell from "./cell";

class CellList extends React.Component {
  render() {
    let columns = [];
    let i = 0;
    while (i <= 2) {
      let cells = [];
      let j = 0;
      while (j <= 2) {
        cells.push(
          <Cell key={`${i}, ${j}`} i={i} j={j} gameId={this.props.gameId} />
        );
        j++;
      }
      columns.push(
        <div className="column" key={i}>
          {cells}
        </div>
      );
      i++;
    }

    return <div className="cell-list">{columns}</div>;
  }
}

export default CellList;
