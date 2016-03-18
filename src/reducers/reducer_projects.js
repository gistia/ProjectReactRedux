import { FETCH_PROJECTS } from '../actions/index';

export default function(state=null, action) {
  console.log(action.payload);

  switch (action.type) {
  case FETCH_PROJECTS:
    return action.payload.data.projects;
  }

  return state;
}
