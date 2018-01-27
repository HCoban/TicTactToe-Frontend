import React from 'react';
import Cell from './cell';

class CellList extends React.Component {
  render() {
    let cells = [];
    let i = 0;
    while (i <= 2) {
      let j = 0;
      while (j <= 2) {
        cells.push(<Cell key={`${i}, ${j}`} />);
        j++;
      }
      i++;
    }

    return(
      <div className="  cell-list">
        {cells}
      </div>
    );
  }
}

export default CellList;