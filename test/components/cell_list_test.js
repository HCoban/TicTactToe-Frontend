import { renderComponent, expect } from '../test_helper';
import CellList from '../../src/components/cell_list';

describe('CellList', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CellList);
  });

  it('shows nine cells', () => {
    expect(component.find('.cell').length).to.equal(9);
  });
});