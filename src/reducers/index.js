import { combineReducers } from 'redux';
import PageReducer from './reducer_page';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
  page: PageReducer,
  projects: ProjectsReducer
});

export default rootReducer;
