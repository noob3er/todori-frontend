import { setCookie } from "cookies-next";
import axios from "@/lib/axios";
import { AuthResDto } from "./dto/AuthResDto";

interface Payload {
  username: string;
  email: string;
  password: string;
}

const register = async (payload: Payload): Promise<AuthResDto | null> => {
  try {
    const { data } = await axios.post("/auth/register", payload);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.accessToken}`;
    setCookie("accessToken", data.accessToken);
    return data;
  } catch {
    alert("회원가입에 실패했습니다.");
    return null;
  }
};

export default register;
