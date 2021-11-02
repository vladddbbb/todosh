import React from 'react';

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import './_layoutWrapper.css';

const { Header, Content, Footer, Sider } = Layout;

export default ({ children }) => (
  <Layout className="l-main-layout">
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo">T O D O S H</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          todosh item #1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          todosh item #2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          todosh item #3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          todosh item #4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        TODOSH ©2021 Created by marinerBOB and eeravich
      </Footer>
    </Layout>
  </Layout>
);
