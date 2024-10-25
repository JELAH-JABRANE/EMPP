import { LogoutOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Drawer, Flex, Radio, Space, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';



export const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');

  const items = [
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },

      ],
    },
  ];

  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const CloseDrawrer = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <div
      // style={{ borderBottom: "solid 1px #EBECF0 ", padding: "0 10px" }}
      className="header"
      style={{ backgroundColor: '#0078d4', padding: '3px 10px' }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="container">

        {/* left items */}
        <div className="right-nav-items">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="items-container">
            <div className="drawrer-opner">
              <button style={{ cursor: "pointer" }} type="" onClick={showDrawer} className="hamburger-button">
                <span className="dash"></span>
                <span className="dash"></span>
                <span className="dash"></span>
              </button>

            </div>
            <div className="logo">
              <span className="" style={{ color: 'whitesmoke' }} >e-Recrutement</span>
            </div>


          </div>







        </div>
        {/* Right items */}
        <div style={{ display: 'flex', alignItems: 'center' }} className="items-container">

          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            triggerSubMenuAction="hover" // Ensures the submenu opens on hover
            style={{
              display: 'flex',
              backgroundColor: 'transparent',  // Set background to transparent
              color :"whitesmoke"
            }}
            items={items}
          />


        </div>
      </div>

      <div>

        <Drawer
          // title="Basic Drawer"
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <Button type="" onClick={CloseDrawrer} className="hamburger-button">
            <span className="dash"></span>
            <span className="dash"></span>
            <span className="dash"></span>
          </Button>

          <div className="sidebar-items">
            <ul style={{ padding: '0px' }}>
              <li style={{ listStyle: 'none', padding: '8px', alignItems: 'center', gap: "30px" }}>
                <span>Icon</span>
                <button style={{ backgroundColor: "transparent", border: "none" }} >item & & 1</button>
              </li>
              <li style={{ listStyle: 'none', padding: '8px', alignItems: 'center', gap: "30px" }}>
                <span>Icon</span>
                <button style={{ backgroundColor: "transparent", border: "none" }} >item & & 1</button>
              </li>
              <li style={{ listStyle: 'none', padding: '8px', alignItems: 'center', gap: "30px" }}>
                <span>Icon</span>
                <button style={{ backgroundColor: "transparent", border: "none" }} >item & & 1</button>
              </li>
              <li style={{ listStyle: 'none', padding: '8px', alignItems: 'center', gap: "30px" }}>
                <span>Icon</span>
                <button style={{ backgroundColor: "transparent", border: "none" }} >item & & 1</button>
              </li>
              <li style={{ listStyle: 'none', padding: '8px', alignItems: 'center', gap: "30px" }}>
                <span>Icon</span>
                <button style={{ backgroundColor: "transparent", border: "none" }} >item & & 1</button>
              </li>

            </ul>

          </div>


        </Drawer>


      </div>
    </div>
  );
};
