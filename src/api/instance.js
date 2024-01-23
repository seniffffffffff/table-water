import axios from "axios";
import { API_REST_URL, AXIOS_TIMEOUT } from "../constants/config";

const axiosBaseConfig = axios.create({
  baseURL: API_REST_URL,
  timeout: AXIOS_TIMEOUT,
});

export const api = axios.create(axiosBaseConfig);

api.interceptors.request.use((request) => {
  const newRequest = { ...request };

  return newRequest;
});

api.interceptors.response.use(
  (response) => {
    const newResponse = { ...response };

    return newResponse;
  },
  (error) => {
    const newError = { ...error };

    return Promise.reject(newError);
  }
);
