import { FETCH_PROJECT } from '../actions/index';
import { FETCH_PROJECTS } from '../actions/index';
import { FETCH_MILESTONES } from '../actions/index';

const INITIAL_STATE = { all: [], project: null, milestones: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECT:
      return { ...state, project: action.payload.data.project };

    case FETCH_PROJECTS:
      return { ...state, all: action.payload.data.projects };

    case FETCH_MILESTONES:
      return { ...state, milestones: action.payload.data.milestones };
  }

  return state;
}
