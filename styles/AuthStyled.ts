import styled from "styled-components";
import Link from "next/link";

export const AuthWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BorderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 480px;
  height: auto;
  padding: 20px;

  border: 2px solid grey;
  box-shadow: 2px 4px grey;
  border-radius: 20px;
  background-color: #fafafa;
`;

export const AuthInner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  width: 85%;
  max-width: 360px;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 24px;
  padding-bottom: 20px;
`;

export const MainTitle = styled.h1`
  font-size: 74px;
  font-weight: 900;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  color: #a37460;

  @media (max-width: 768px) {
    font-size: 48px;
  }
  user-select: none;
`;

export const ContentTitle = styled.img`
  height: 82px;
  margin-bottom: 8px;
  user-select: none;
`;

export const ContentInputWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 6px;
`;

export const ContentInputBox = styled.div`
  width: 100%;
  height: 48px;
  position: relative;
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: #f6f1ef;
  padding: 0 18px;
  border-radius: 6px;
`;

export const ContentInputImage = styled.img`
  width: 16px;
  height: 16px;
  user-select: none;
`;

export const ContentInput = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: black;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const ContentVisiblePassword = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  background-color: transparent;
  border: none;
`;
export const ContentVisiblePasswordIcon = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;

  user-select: none;
`;

export const ContentSubmitWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 8px;
  gap: 4px;
`;

export const ContentSubmit = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0;

  border-radius: 8px;
  border: none;
  background-color: #bf9076;

  font-weight: 600;
  font-size: 14px;
  color: white;

  cursor: pointer;
  transition: 0.2s;
`;

export const ContentGoogleSubmit = styled(Link)`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0;

  border-radius: 8px;
  border: none;
  background-color: #bf9076;

  font-weight: 600;
  font-size: 14px;
  color: white;
  text-decoration: none;

  cursor: pointer;
  transition: 0.2s;
`;

export const ContentSignup = styled(Link)`
  width: 100%;
  text-align: right;
  padding-top: 10px;

  font-weight: 400;
  font-size: 12px;

  color: black;

  text-decoration: none;
`;

export const GoogleLogo = styled.img`
  padding-top: 2px;
  padding-right: 8px;
  width: 22px;
`;

export const Line = styled.img`
  width: 100%;
  user-select: none;
`;
