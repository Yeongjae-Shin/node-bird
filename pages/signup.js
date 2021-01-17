import React, { useState, useCallback } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Form, Input, Checkbox, Button } from "antd";

import AppLayout from "../components/AppLayout";
import useInput from "../lib/hooks/useInput";

const Error = styled.div`
  color: red;
`;

const SignUp = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassowrd] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState(false);
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);

  const onSubmit = useCallback(() => {
    if (password !== pwCheck) {
      return setPwError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(id, nickname, password);
  }, [password, pwCheck, term]);

  const onChangePwCheck = useCallback(
    ({ target: { value } }) => {
      setPwCheck(value);
      setPwError(value !== password);
    },
    [password]
  );

  const onChangeTerm = useCallback(({ target: { checked } }) => {
    setTerm(checked);
    setTermError(false);
  }, []);

  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <lable htmlFor="id">아이디</lable>
            <br />
            <Input name="id" value={id} onChange={onChangeId} required />
            <lable htmlFor="password">비밀번호</lable>
            <br />
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChangePassowrd}
              required
            />
            <lable htmlFor="passwordCheck">비밀번호 확인</lable>
            <br />
            <Input
              type="password"
              name="passwordCheck"
              value={pwCheck}
              onChange={onChangePwCheck}
              required
            />
            {pwError && <Error>비밀번호가 일치하지 않습니다.</Error>}
            <lable htmlFor="nickname">닉네임</lable>
            <br />
            <Input
              name="nickname"
              value={nickname}
              onChange={onChangeNickname}
              required
            />
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              약관에 동의합니다.
            </Checkbox>
            {termError && <Error>약관에 동의하셔야 합니다.</Error>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default SignUp;
