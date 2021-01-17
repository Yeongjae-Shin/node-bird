import React, { useCallback, useMemo } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Form, Input, Button } from "antd";

import useInput from "../lib/hooks/useInput";

const FormStyle = styled(Form)`
  padding: 1rem;
`;

const LoginForm = ({ setIsLogin }) => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassowrd] = useInput("");

  const handleSubmit = useCallback(() => {
    setIsLogin(true);
  }, [id, password]);

  const style = useMemo(() => ({ marginTop: 10 }), []);

  return (
    <FormStyle onFinish={handleSubmit}>
      <div>
        <label htmlFor="id">아이디</label>
        <Input
          name="id"
          value={id}
          onChange={onChangeId}
          required
          autoComplete="false"
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <Input
          name="password"
          type="password"
          value={password}
          onChange={onChangePassowrd}
          required
          autoComplete="false"
        />
      </div>
      <div style={style}>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </FormStyle>
  );
};

LoginForm.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};

export default LoginForm;
