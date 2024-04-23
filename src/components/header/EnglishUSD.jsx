//

import React from "react";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [{ key: "1", label: "1st menu item" }];

const EnglishUSD = () => {
  return (
    <Dropdown
      overlay={
        <Menu>
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      }
      trigger={["click"]}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <Space>
          English / USD
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default EnglishUSD;
