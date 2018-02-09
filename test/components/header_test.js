import { renderComponent, expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Header', () => {
  let state;
  let ownProps;

  beforeEach(() => {
    state = {
      game: {
        1: {
          id: 1,
          playerOne: 'first',
          playerTwo: 'second'
        }
      },
      cells: {} ,
      error: null
    };
    ownProps = { gameId: 1};
  })
  it('shows first player on start', () => {
    let component = renderComponent(Header, ownProps, state);
    expect(component.find('h1')).to.have.text("first's turn");
  });

  it("shows second player's name after first player plays ", () => {
    // If player 1 already marked A1
    state.cells = {
      A1: {
        value: "X",
        step: 1
      }
    };
    let component = renderComponent(Header, ownProps, state);
    expect(component.find('h1')).to.have.text("second's turn");
  });

  it("contains 'game over' when game is completed", () => {
    state.game[1].completed = true
    let component = renderComponent(Header, ownProps, state);
    expect(component.find('h1')).to.have.text('Game Over')
  });

  it("shows the winner if there is one", () => {
    state.game[1].completed = true,
    state.game[1].winner = true
    state.cells = {
      A1: { value: "X", step: 1 },
      B1: { value: "O", step: 2 },
      A2: { value: "X", step: 3 },
      B2: { value: "O", step: 4 },
      A3: { value: "X", step: 5 }
    };
    let component = renderComponent(Header, ownProps, state);
    expect(component.find('h2')).to.have.text('first won')
  });

  it('shows error message when unauthorized', () => {
    state.error = "Unauthorized";
    let component = renderComponent(Header, ownProps, state);
    expect(component.text()).to.contain('You are not allowed to play this game');
  })

});