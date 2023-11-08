import { getCookie } from "cookies-next";
import Router from "next/router";
import { SignupResDto } from "@/api/auth/signup/dto/SignupResDto";
import axios from "@/lib/axios";

const getProfile = async () => {
  try {
    const { data } = await axios.get<SignupResDto>("/profile", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return data;
  } catch {
    Router.pathname !== "/login" &&
      Router.pathname !== "/register" &&
      Router.pathname !== "/" &&
      Router.push("/login");
  }
};

export default getProfile;
