import { expect } from '../test_helper';

import { FETCH_PROJECT } from '../../src/actions/index';
import { FETCH_PROJECTS } from '../../src/actions/index';
import { FETCH_TASKS } from '../../src/actions/index';
import { SET_TITLE } from '../../src/actions/index';
import pageReducer from '../../src/reducers/page';

describe('Page Reducer', () => {
  it('handles action with unknown type', () => {
    const newState = pageReducer(undefined, {});
    expect(newState.title).to.be.empty;
    expect(newState.error).to.be.null;
  });

  it('handles SET_TITLE', () => {
    const action = { type: SET_TITLE, payload: 'Page Title' };
    const newState = pageReducer(undefined, action);
    expect(newState.title).to.be.equal('Page Title');
  });

  it('handles FETCH_PROJECT errors', () => {
    const action = { type: FETCH_PROJECT, error: 'Error' };
    const newState = pageReducer(undefined, action);
    expect(newState.error).to.be.equal('Error fetching project');
  });

  it('handles FETCH_PROJECTS errors', () => {
    const action = { type: FETCH_PROJECTS, error: 'Error' };
    const newState = pageReducer(undefined, action);
    expect(newState.error).to.be.equal('Error fetching projects');
  });

  it('handles FETCH_TASKS errors', () => {
    const action = { type: FETCH_TASKS, error: 'Error' };
    const newState = pageReducer(undefined, action);
    expect(newState.error).to.be.equal('Error fetching tasks');
  });
});
