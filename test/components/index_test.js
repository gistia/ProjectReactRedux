import { expect } from '../test_helper';

import { SET_TITLE, setTitle } from '../../src/actions/index';

describe('actions', () => {
  describe('setTitle', () => {
    let action;

    beforeEach(() => { action = setTitle('New Title'); })

    it('has the correct type', () => {
      expect(action.type).to.equal(SET_TITLE);
    });

    it('has the correct payload', () => {
      expect(action.payload).to.equal('New Title');
    });
  })
});
