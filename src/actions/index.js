import axios from 'axios';

const TOKEN = '6VeUAT4n2i5cF9f863vxjytn';
const ROOT_URL = `http://localhost:3000/api/v1`;

export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export function fetchProjects() {
  const url = `${ROOT_URL}/projects?private_token=${TOKEN}`;
  const request = axios.get(url);

  return {
    type: FETCH_PROJECTS,
    payload: request
  }
}
