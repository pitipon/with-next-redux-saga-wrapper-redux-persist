import axios from 'axios';
import { api as baseUrl } from '../config';

export const apiFetch = async (args)=> {
  const {url, method, params, payload, token} = args;
    const config = {
      params: params ? {...params} : null,
      method,
      data: payload ? {...payload}: null,
      url:baseUrl+url
    }
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }
    console.log(config);
    const {data} = await axios.request(config)
    return data
  }