import { setCookie } from "cookies-next";
import axios from "@/lib/axios";
import { AuthResDto } from "./dto/AuthResDto";
import { apiInstance } from "..";

interface Payload {
  username: string;
  password: string;
}

const login = async (payload: Payload): Promise<AuthResDto | null> => {
  try {
    const { data } = await apiInstance().post("/auth/login", payload);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.accessToken}`;
    setCookie("accessToken", data.accessToken);
    return data;
  } catch {
    alert("로그인에 실패했습니다.");
    return null;
  }
};

export default login;
