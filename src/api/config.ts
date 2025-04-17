import axios from "axios";
import { apiKey } from "../constants/api";

export const OpenPhoneApi = axios.create({
  baseURL: '/v1',
  headers: {
    Authorization: apiKey
  }
})