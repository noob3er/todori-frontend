"use client";

import Head from "next/head";
import login from "@/api/auth/login";
import React, { useState } from "react";
import {
  AuthWrapper,
  BorderWrapper,
  AuthInner,
  ContentWrap,
  ContentTitle,
  ContentInputWrap,
  ContentInputBox,
  ContentInputImage,
  ContentInput,
  MainTitle,
  ContentVisiblePassword,
  ContentVisiblePasswordIcon,
  ContentSubmitWrap,
  ContentSubmit,
  ContentSignup,
  GoogleLogo,
  Line,
  ContentGoogleSubmit,
} from "../styles/AuthStyled";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

interface InputType {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const [input, setInput] = useState<InputType>({
    username: "",
    password: "",
  });
  const [visiblePw, setVisiblePw] = useState<boolean>(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const loginHandler = async () => {
    const res = await login({
      username: input.username,
      password: input.password,
    });
    res && router.replace("/");
  };

  const handleVisiblePassword = () => setVisiblePw(!visiblePw);

  return (
    <>
      <Head>
        <title>Todori - login</title>
      </Head>
      <AuthWrapper>
        <BorderWrapper>
          <AuthInner>
            <ContentWrap>
              <ContentTitle src="/assets/logo/logo.svg" />
              <MainTitle>Todori</MainTitle>
              <ContentInputWrap>
                <ContentInputBox>
                  <ContentInputImage src="/assets/symbols/account.svg" />
                  <ContentInput
                    name="username"
                    value={input.username}
                    onChange={handleChange}
                    type="text"
                    placeholder="아이디"
                  />
                </ContentInputBox>
                <ContentInputBox>
                  <ContentInputImage src="/assets/symbols/lock.svg" />
                  <ContentInput
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    type={visiblePw ? "text" : "password"}
                    placeholder="비밀번호"
                  />
                  <ContentVisiblePassword onClick={handleVisiblePassword}>
                    <ContentVisiblePasswordIcon
                      src={
                        visiblePw
                          ? "/assets/symbols/visible.svg"
                          : "/assets/symbols/invisible.svg"
                      }
                    />
                  </ContentVisiblePassword>
                </ContentInputBox>
              </ContentInputWrap>
              <ContentSubmitWrap>
                <ContentSubmit onClick={loginHandler}>로그인</ContentSubmit>
                <Line src="/assets/symbols/line.svg" />
                <ContentGoogleSubmit href="http://localhost:3000/auth/google">
                  <GoogleLogo src="/assets/symbols/google.svg" />
                  구글계정으로 로그인
                </ContentGoogleSubmit>
                <ContentSignup href="/register">회원가입</ContentSignup>
              </ContentSubmitWrap>
            </ContentWrap>
          </AuthInner>
        </BorderWrapper>
      </AuthWrapper>
    </>
  );
};

export default Login;
