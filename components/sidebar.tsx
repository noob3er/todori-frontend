import getProfile from "@/api/auth/Profile/getProfile";
import { LoginResDto } from "@/api/auth/login/dto/LoginResDto";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const [profile, setProfile] = useState<LoginResDto>();

  useEffect(() => {
    if (getCookie("accessToken"))
      async () => {
        const res = await getProfile();
        setProfile(res);
      };
  }, [setProfile]);

  return (
    <>
      <Toggle id="toggle" type="checkbox" />
      <SidebarWrap>
        <ToggleLabel htmlFor="toggle">
          <ToggleImg src="/assets/symbols/menu.svg" alt="" />
        </ToggleLabel>
        <SidebarContentWrap>
          <SidebarHeader>
            <SidebarLogoWrap href="/" passHref>
              <SidebarLogo src="/assets/logo/logo.svg" />
              <Title>Todori</Title>
            </SidebarLogoWrap>
          </SidebarHeader>
          <SidebarProfileWrap href={profile ? "/profile" : "/login"}>
            <SidebarProfileImg src="/assets/symbols/profile.svg" />
            {profile ? (
              <SidebarProfileName>{profile.username}</SidebarProfileName>
            ) : (
              <SidebarProfileName style={{ color: "#000" }}>
                로그인이 필요합니다.
              </SidebarProfileName>
            )}
          </SidebarProfileWrap>
        </SidebarContentWrap>
      </SidebarWrap>
    </>
  );
};

export default Sidebar;

const ToggleImg = styled.img`
  height: 100%;
`;

const ToggleLabel = styled.label`
  position: absolute;
  right: 16px;
  top: 16px;
  transform: translateX(200%);
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;
  transition: 0.8s;

  @media (min-width: 758px) {
    display: none;
  }
`;

const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #bf9076;

  width: 298px;
  padding: 48px 34px;
  height: 100vh;
  transition: 0.2s;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media (max-width: 760px) {
    transform: translateX(-100%);
    padding: 40px 20px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SidebarLogo = styled.img`
  height: 48px;
  margin-right: 8px;
  margin-bottom: 10px;
`;

const SidebarContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const SidebarLogoWrap = styled(Link)`
  display: flex;
  justify-content: row;
  width: fit-content;
  align-items: center;

  text-decoration: none;
  text-decoration: none;
  color: inherit;

  user-select: none;
`;

const SidebarProfileWrap = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: inherit;

  cursor: pointer;
`;

const SidebarProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #b68163;
  padding: 8px;
`;

const SidebarProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Toggle = styled.input`
  display: none;

  &:checked ~ label {
    transform: translateX(0);
    backdrop-filter: blur(10px);
  }

  &:checked + div > label {
    transform: translateX(0);
  }

  &:checked + div {
    transform: translateX(0);
  }
`;

const SidebarProfileName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

const SidebarItems = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  width: fit-content;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
`;
