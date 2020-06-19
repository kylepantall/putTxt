import React from 'react';

import { Switch, Route, Link } from 'react-router';
import { Home, Puts, Shares } from './routes/routes';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const AppContent = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/']}>
                    <Menu.Item key="/">
                        <span>Home</span>
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="/puts">
                        <span>#MyPuts</span>
                        <Link to="/puts" />
                    </Menu.Item>
                    <Menu.Item key="/shares">
                        <span>@Share</span>
                        <Link to="/shares" />
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>#MyPuts</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/puts">
                            <Puts />
                        </Route>
                        <Route exact path="/shares">
                            <Shares />
                        </Route>
                    </Switch>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}><strong>PutTxt</strong> - Part of the &lt;Put/&gt; services family</Footer>
        </Layout>
    );
};

export default AppContent;
