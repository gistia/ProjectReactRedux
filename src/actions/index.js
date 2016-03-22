import axios from 'axios';

const TOKEN = '6VeUAT4n2i5cF9f863vxjytn';
const ROOT_URL = `http://localhost:3000/api/v1`;

export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_MILESTONES = 'FETCH_MILESTONES';
export const FETCH_TASKS = 'FETCH_TASKS';

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

export function fetchMilestones(id) {
  const url = `${ROOT_URL}/projects/${id}/milestones?private_token=${TOKEN}`
  const request = axios.get(url);

  return {
    type: FETCH_MILESTONES,
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
