import React, { useState, useCallback, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Form, Input, Button } from "antd";

const FormStyle = styled(Form)`
  padding: 1rem;
`;

const LoginForm = ({ setIsLogin }) => {
  const [values, setValues] = useState({});

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setValues({ ...values, [name]: value });
    },
    [values]
  );

  const handleSubmit = useCallback(() => {
    setIsLogin(true);
  }, [values.id, values.password]);

  const style = useMemo(() => ({ marginTop: 10 }), []);

  return (
    <>
      <Head>
        <title>Login | NodeBird</title>
      </Head>
      <FormStyle onFinish={handleSubmit}>
        <div>
          <label htmlFor="id">아이디</label>
          <Input
            name="id"
            value={values.id}
            onChange={handleChange}
            required
            autoComplete="false"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <Input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
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
    </>
  );
};

LoginForm.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};

export default LoginForm;
