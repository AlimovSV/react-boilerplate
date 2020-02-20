import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class API {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string, config: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL,
      headers: {
        Accept: 'application/json',
      },
      ...config,
    });
  }
}
