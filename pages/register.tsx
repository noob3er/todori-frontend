"use client";

import Head from "next/head";
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
} from "../styles/AuthStyled";
import { useRouter } from "next/router";
import register from "../api/auth/register";

interface InputType {
  username: string;
  email: string;
  password: string;
  pwcheck: string;
}

const Login = () => {
  const router = useRouter();
  const [input, setInput] = useState<InputType>({
    username: "",
    email: "",
    password: "",
    pwcheck: "",
  });
  const [visiblePw, setVisiblePw] = useState<{
    password: boolean;
    pwcheck: boolean;
  }>({
    password: false,
    pwcheck: false,
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const registerHandler = async () => {
    if (input.password !== input.pwcheck) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }
    if (
      input.username == "" ||
      input.email == "" ||
      input.password == "" ||
      input.pwcheck == ""
    ) {
      alert("빈칸을 모두 채워주세요!");
      return;
    }
    if (input.password.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    if (input.password.length > 20) {
      alert("비밀번호는 20자 이하여야 합니다.");
      return;
    }
    if (input.username.length < 4) {
      alert("아이디는 4자 이상이어야 합니다.");
      return;
    }
    if (input.username.length > 20) {
      alert("아이디는 20자 이하여야 합니다.");
      return;
    }
    const res = await register({
      username: input.username,
      email: input.email,
      password: input.password,
    });
    res && router.replace("/");
  };

  const handleVisiblePassword = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: boolean
  ) => {
    const { name } = e.currentTarget;
    setVisiblePw({
      ...visiblePw,
      [name]: !value,
    });
  };

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
                  <ContentInputImage src="/assets/symbols/email.svg" />
                  <ContentInput
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="이메일"
                  />
                </ContentInputBox>
                <ContentInputBox>
                  <ContentInputImage src="/assets/symbols/lock.svg" />
                  <ContentInput
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    type={visiblePw.password ? "text" : "password"}
                    placeholder="비밀번호"
                  />
                  <ContentVisiblePassword
                    name="password"
                    onClick={(e) => {
                      handleVisiblePassword(e, visiblePw.password);
                    }}
                  >
                    <ContentVisiblePasswordIcon
                      src={
                        visiblePw.password
                          ? "/assets/symbols/visible.svg"
                          : "/assets/symbols/invisible.svg"
                      }
                    />
                  </ContentVisiblePassword>
                </ContentInputBox>
                <ContentInputBox>
                  <ContentInputImage src="/assets/symbols/lock.svg" />
                  <ContentInput
                    name="pwcheck"
                    value={input.pwcheck}
                    onChange={handleChange}
                    type={visiblePw.pwcheck ? "text" : "password"}
                    placeholder="비밀번호 확인"
                  />
                  <ContentVisiblePassword
                    name="pwcheck"
                    onClick={(e) => {
                      handleVisiblePassword(e, visiblePw.pwcheck);
                    }}
                  >
                    <ContentVisiblePasswordIcon
                      src={
                        visiblePw.pwcheck
                          ? "/assets/symbols/visible.svg"
                          : "/assets/symbols/invisible.svg"
                      }
                    />
                  </ContentVisiblePassword>
                </ContentInputBox>
              </ContentInputWrap>
              <ContentSubmitWrap>
                <ContentSubmit onClick={registerHandler}>
                  회원가입
                </ContentSubmit>
                <ContentSignup href="/login">로그인</ContentSignup>
              </ContentSubmitWrap>
            </ContentWrap>
          </AuthInner>
        </BorderWrapper>
      </AuthWrapper>
    </>
  );
};

export default Login;
