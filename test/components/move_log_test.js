import { renderComponent, expect } from '../test_helper';
import MoveLog from '../../src/components/move_log';

describe('MoveLog', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(MoveLog);
  });

  it('exists', () => {
    expect(component).to.exist;
  });
});