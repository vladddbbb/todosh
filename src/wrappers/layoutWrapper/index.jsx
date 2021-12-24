import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu } from 'antd';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { getUriPath } from '@src/store/selectors/routerSelectors.js';

import './_layoutWrapper.css';

const { Header, Content, Footer, Sider } = Layout;

const LayoutWrapper = ({ uri, children }) => (
  <Layout className="l-main-layout">
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo">T O D O S H</div>
      <Menu theme="dark" mode="inline" selectedKeys={[uri]}>
        <Menu.Item key="/">
          <Link to="/">Main page</Link>
        </Menu.Item>
        <Menu.Item key="/todos">
          <Link to="/todos">Todos</Link>
        </Menu.Item>
        <Menu.Item key="/help">
          <Link to="/help">Help page</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content className="l-main-layout__inner" style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>TODOSH ©2021</Footer>
    </Layout>
  </Layout>
);

LayoutWrapper.propTypes = {
  uri: PropTypes.string,
  children: PropTypes.element,
};

const LayoutContainer = ({ children }) => {
  const uri = useSelector(getUriPath);

  return <LayoutWrapper uri={uri}>{children}</LayoutWrapper>;
};

LayoutContainer.propTypes = {
  children: PropTypes.element,
};

export default LayoutContainer;
