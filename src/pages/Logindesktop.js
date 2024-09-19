import styled from "styled-components";
import React from "react";
import img from "../imgfiles/loginimg/Threads-login-bg.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Loginbg = styled.img`
  top: 0;
  position: absolute;
  width: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  position: relative;
  border: 1px solid #f00;
  width: 370px;
  height: 1340px;
`;

const Logintext = styled.span`
  margin-top: 321px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 30px;
`;

const LoginInput = styled.input`
  top: 30px;
  width: 100%;
  height: 54.8px;
  background: #f5f5f5;
  border: 1px solid #d0d0d0;
  margin-bottom: 24px;
  border-radius: 8px;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 54.8px;
  background: #000;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`;

const PasswordLost = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-color: #adadad;
  margin: 30px 0;
`;

const Loginswipper = styled.div`
  width: 100%;
  height: 74px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Logindesktop = () => {
  return (
    <Wrapper>
      <Loginbg src={img}></Loginbg>
      <Container>
        <Logintext>Threads 계정으로 로그인</Logintext>
        <LoginInput placeholder="사용자 이름, 전화번호  또는 이메일 아이디" />
        <LoginInput placeholder="비밀번호를 입력하세요" />
        <LoginBtn placeholder="로그인"></LoginBtn>
        <PasswordLost>비밀번호를 잊으셨나요?</PasswordLost>
        <Loginswipper></Loginswipper>
        <Loginswipper></Loginswipper>
      </Container>
    </Wrapper>
  );
};

export default Logindesktop;
