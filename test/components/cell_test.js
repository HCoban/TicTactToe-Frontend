import { renderComponent, expect } from '../test_helper';
import Cell from '../../src/components/cell';

describe('Cell', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Cell);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('cell');
  });
});