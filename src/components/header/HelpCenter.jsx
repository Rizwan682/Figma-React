//


import React from "react";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
];

const HelpCenter = () => {
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
          Help Center
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default HelpCenter;
