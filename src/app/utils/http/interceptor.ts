import axios, { InternalAxiosRequestConfig } from 'axios';
import history from "../browser/browserHistory";


export const apiClient = axios.create();


const authInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  return config;
};

apiClient.interceptors.request.use(authInterceptor);
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(new Error(error));
  },
);


