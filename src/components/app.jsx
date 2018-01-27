import React from 'react';
import CellList from './cell_list';
import MoveLog from './move_log';

class App extends React.Component {
  render() {
    return(
      <div>
        <CellList />
        <MoveLog />
      </div>
    );
  }
}

export default App;