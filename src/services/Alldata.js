// Import the BASE_URL from the config file
import { BASE_URL } from '../config';

export const fetchUser = async () => {
  const response = await fetch(`${BASE_URL}users/`);
  const data = await response.json();
  return data.users;
}

export const fetchProject = async () => {
  const response = await fetch(`${BASE_URL}projects/`);
  const data = await response.json();
  return data;
}

export const fetchServices = async () => {
  const response = await fetch(`${BASE_URL}services/`);
  const data = await response.json();
  return data;
}

export const fetchEducations = async () => {
  const response = await fetch(`${BASE_URL}educations/`);
  const data = await response.json();
  return data;
}

export const fetchExperiences = async () => {
  const response = await fetch(`${BASE_URL}experiences/`);
  const data = await response.json();
  return data;
}

