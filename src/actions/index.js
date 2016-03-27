import _ from 'lodash';
import axios from 'axios';

const TOKEN = '6VeUAT4n2i5cF9f863vxjytn';
const ROOT_URL = 'http://localhost:3000/api/v1';

/** Page actions */
export const SET_TITLE = 'SET_TITLE';

/** Project actions */
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_TASKS = 'FETCH_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';

export function fetchProject(id) {
  const url = `${ROOT_URL}/projects/${id}?private_token=${TOKEN}`
  const request = axios.get(url);

  return {
    type: FETCH_PROJECT,
    payload: request
  }
}

export function fetchProjects() {
  const url = `${ROOT_URL}/projects?private_token=${TOKEN}`;
  const request = axios.get(url);

  return {
    type: FETCH_PROJECTS,
    payload: request
  }
}

export function fetchTasks(id) {
  const url = `${ROOT_URL}/milestones/${id}/tasks?private_token=${TOKEN}`
  const request = axios.get(url);

  return {
    type: FETCH_TASKS,
    payload: request,
    meta: { id }
  }
}

export function updateTask(taskObj) {
  const { id, milestone_id } = taskObj;
  const url = `${ROOT_URL}/milestones/${milestone_id}/tasks/${id}?private_token=${TOKEN}`
  const task = _.pick(taskObj,
    ['name', 'description', 'status', 'points', 'rate', 'user_id']);
  const request = axios.put(url, { task });

  return {
    type: UPDATE_TASK,
    payload: request
  }
}

export function setTitle(title) {
  return {
    type: SET_TITLE,
    payload: title
  }
}
