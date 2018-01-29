import { renderComponent, expect } from '../test_helper';
import MoveLog from '../../src/components/move_log';

describe('MoveLog', () => {
  let component;

  beforeEach(() => {
    const props = { cells: { A3: "X", B2: "O" }, move: ["A3", "B2"] };
    component = renderComponent(MoveLog, null, props);
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('has correct class', () => {
    expect(component).to.have.class('move-log');
  });

  it('renders correct text', () => {
    expect(component.find('li:nth-child(1)')).to.contain("Player 1 marked A3");
    expect(component.find('li:nth-child(2)')).to.contain("Player 2 marked B2");
  });
});