import { expect } from '../test_helper';

import projectReducer from '../../../src/reducers/projects';
import { FETCH_PROJECT } from '../../../src/actions/index';
import { FETCH_PROJECTS } from '../../../src/actions/index';
import { FETCH_TASKS } from '../../../src/actions/index';
import { UPDATE_TASK } from '../../../src/actions/index';

describe('Project Reducer', () => {
  it('handles action with unknwon type', () => {
    const newState = projectReducer(undefined, {})
    expect(newState.all).to.eql([]);
    expect(newState.project).to.be.null;
  });

  it('handles FETCH_PROJECT', () => {
    const action = {
      type: FETCH_PROJECT,
      payload: { data: { project: 'PROJECT' } }
    }
    expect(projectReducer({}, action).project).to.equal('PROJECT')
  });

  it('handles FETCH_PROJECTS', () => {
    const action = {
      type: FETCH_PROJECTS,
      payload: { data: { projects: 'PROJECTS' } }
    }
    expect(projectReducer({}, action).all).to.equal('PROJECTS');
  });

  it('handles FETCH_TASKS', () => {
    const state = {
      project: {
        milestones: [{id: 1}, {id: 2}]
      }
    };
    const action = {
      type: FETCH_TASKS,
      payload: { data: { tasks: 'TASKS' } },
      meta: { id: 2 }
    };
    const newState = projectReducer(state, action);
    const milestone = newState.project.milestones.find(m => m.id === 2);
    expect(milestone.tasks).to.equal('TASKS');
  });

  it('handles UPDATE_TASK', () => {
    const state = {
      project: {
        milestones: [{id: 1, tasks: [{ milestone_id: 1 }]}, {id: 2}]
      }
    };
    const action = {
      type: UPDATE_TASK,
      payload: { data: { task: { milestone_id: 1, check: true } } }
    };
    const newState = projectReducer(state, action);
    const milestone = newState.project.milestones.find(m => m.id === 1);
    expect(milestone.tasks[0].check).to.be.true;
  });
});
