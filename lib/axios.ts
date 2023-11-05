import axios from "axios";

const BASE_URL = "https://localhost:3000";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
