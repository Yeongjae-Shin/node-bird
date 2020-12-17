import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

import { Menu, Input, Row, Col } from "antd";

const AppLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const style = useMemo(
    () => ({
      verticalAlign: "middle",
    }),
    []
  );

  const navStyle = useMemo(
    () => ({
      display: "flex",
      justifyContent: "center",
    }),
    []
  );

  return (
    <div>
      <Menu mode="horizontal" style={navStyle}>
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search style={style} enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLogin ? (
            <UserProfile setIsLogin={setIsLogin} />
          ) : (
            <LoginForm setIsLogin={setIsLogin} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.shogong.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            쇼공, 쇼핑을 공장에서
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
