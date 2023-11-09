import axios, { AxiosError } from "axios";

export const apiInstance = () =>
  axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const authInstance = () => {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    (config) => config,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        window.location.href = "/login";
      }
      return error;
    }
  );

  return instance;
};
