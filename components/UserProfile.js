import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLogin }) => {
  const handleLogout = useCallback(() => {
    setIsLogin(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          쨱짹
          <br />0
        </div>,
        <div key="following">
          팔로잉
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>K</Avatar>} title="Konfusion"></Card.Meta>
      <Button onClick={handleLogout}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};

export default UserProfile;
