import React, { useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { Form, Input, Button } from "antd";

const LoginForm = () => {
  const [value, setValue] = useState({
    id: "",
    password: "",
  });

  const handleChange = useCallback(({ target: { name, value } }) => {
    setValue({ ...value, [name]: value });
  }, []);

  const handleSubmit = () => {
    sessionStorage.setItem("user", value.id);
  };

  return (
    <>
      <Head>
        <title>Login | NodeBird</title>
      </Head>
      <Form>
        <div>
          <label htmlFor="id">아이디</label>
          <Input name="id" value={value.id} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <Input
            name="password"
            type="password"
            value={value.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Button
            type="primary"
            htmlType="submit"
            loading={false}
            onSubmit={handleSubmit}
          >
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
