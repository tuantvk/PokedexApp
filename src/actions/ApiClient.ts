import axios from 'axios';
import { API } from '../../config';

export const fetchPokedex = () => {
  const req = axios.get(`${API}`);
  return req;
}