import { combineReducers } from 'redux';
import PageReducer from './page';
import ProjectsReducer from './projects';

const rootReducer = combineReducers({
  page: PageReducer,
  projects: ProjectsReducer
});

export default rootReducer;
