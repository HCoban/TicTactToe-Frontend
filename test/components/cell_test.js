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

  describe('clicking', () => {
    beforeEach(() => {
      component.simulate('click');
    });

    it('marks X if clicked by first player', () => {
      expect(component.find('span')).to.have.value('X');
    });

    it('marks O if clicked by second player', () => {
      expect(component.find('span')).to.have.value('O');
    });
  });
});