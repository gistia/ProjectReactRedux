import { SET_TITLE } from '../actions/index';
import { FETCH_PROJECTS } from '../actions/index';
import { FETCH_PROJECT } from '../actions/index';
import { FETCH_TASKS } from '../actions/index';

const INITIAL_STATE = { title: '', error: null };

function handleError(state, action, message) {
  if (action.error) {
    return { ...state, error: message }
  }

  return state;
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };

    case FETCH_PROJECT:
      return handleError(state, action, 'Error fetching project');

    case FETCH_PROJECTS:
      return handleError(state, action, 'Error fetching projects');

    case FETCH_TASKS:
      return handleError(state, action, 'Error fetching tasks');
  }

  return state;
}
