import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { List, Button, Card } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {
  const listStyle = useMemo(() => ({ marginBottom: "20px" }), []);
  const gridStyle = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
  const btnStyle = useMemo(
    () => ({ textAlign: "center", margin: "10px 0" }),
    []
  );
  const smallListStyle = useMemo(() => ({ marginTop: 20 }), []);

  return (
    <List
      style={listStyle}
      grid={gridStyle}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={btnStyle}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={smallListStyle}>
          <Card actions={[<CloseOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
