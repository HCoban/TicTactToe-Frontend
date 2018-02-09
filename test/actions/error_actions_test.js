import { expect } from '../test_helper';
import  { addError, removeError, ErrorConstants } from '../../src/actions/error_actions';
import { equal } from 'assert';

describe('Error actions', () => {
  describe('addError', () => {
    it('has correct type', () => {
      expect(addError().type).to.equal(ErrorConstants.ADD_ERROR);
    });

    it('has correct payload', () => {
      expect(addError("Unauthorized").error).to.equal("Unauthorized");
    });
  });

  describe('removeError', () => {
    it('has correct type', () => {
      expect(removeError().type).to.equal(ErrorConstants.REMOVE_ERROR);
    })
  })
})