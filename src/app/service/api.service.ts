import axios from "axios";
import { IPost } from "../models/post";

export class ApiService {
  constructor() { }

  //Setting up Get function as a generic
  get<T>(apiUrl: string) {
    return axios<T>({
      method: 'get',
      url: apiUrl
    });
  }

  post<T>(apiUrl: string, payload: any) {
    return axios<T>({
      method: 'post',
      url: apiUrl,
      data: payload
    });
  }

  put<T>(apiUrl: string, payload: any) {
    return axios<T>({
      method: 'put',
      url: apiUrl,
      data: payload
    });
  }

}