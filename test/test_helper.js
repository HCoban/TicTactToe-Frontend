import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';

import configureStore from '../src/store/store';

const { JSDOM } = jsdom;
const {
  document
} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = global.document.defaultView;

const $ = jquery(global.window);

function renderComponent(ComponentClass, props, state) {
  const component = TestUtils.renderIntoDocument(
    <Provider store={configureStore()}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(component));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]); 
};

chaiJquery(chai, chai.util, $);

export {
  renderComponent,
  expect
};