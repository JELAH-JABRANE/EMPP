import { LogoutOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Drawer, Flex, Radio, Space } from 'antd';


export const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');

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
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: '95%', margin: 'auto' }} className="container">


        <div className="right-nav-items">
          <div className="items-container">
            <div>
                <Space>
                  {/* <Radio.Group value={placement} onChange={onChange}>
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                  </Radio.Group> */}
                  <div className="drawrer-opner">
                    <Button type="" onClick={showDrawer} className="hamburger-button">
                      <span className="dash"></span>
                      <span className="dash"></span>
                      <span className="dash"></span>
                    </Button>

                  </div>

                </Space>
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



        </div>
      </div>
    </div>
  );
};
