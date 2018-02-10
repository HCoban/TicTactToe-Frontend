import React from "react";
import Cell from "./cell";

class CellList extends React.Component {
  render() {
    let positionLabels = []
    let columns = [];
    let columnNames = ["A", "B", "C"]
    columnNames.forEach((columnName) => {
      let cells = [];
      let rowNames = [1, 2, 3];
      rowNames.forEach((rowName) => {
        cells.push(
          <Cell key={`${columnName}, ${rowName}`} column={columnName} row={rowName} gameId={this.props.gameId} />
        );
        if (columnName === "A") {
          positionLabels.push(<span key={rowName} className={`position-label row-${rowName}`}>{rowName}</span>)
        }
      })
      columns.push(
        <div className="column" key={columnName}>
          {cells}
        </div>
      );
      positionLabels.push(<span key={columnName} className={`position-label column-${columnName}`}>{columnName}</span>)
    })

    return (
      <div className="cell-list">
        {positionLabels}
        {columns}
      </div>
    );
  }
}

export default CellList;
