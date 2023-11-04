import axios from "axios";

const BASE_URL = "https://backend/api";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
