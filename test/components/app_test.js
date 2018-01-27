import { renderComponent, expect } from '../test_helper';

import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows cell list', () => {
    expect(component.find('.cell-list')).to.exist;
  });

  it('shows move log', () => {
    expect(component.find('.move-log')).to.exist;
  });
});