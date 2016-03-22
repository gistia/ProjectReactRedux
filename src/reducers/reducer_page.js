import { SET_TITLE } from '../actions/index';

const INITIAL_STATE = { title: '' };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
  }

  return state;
}
