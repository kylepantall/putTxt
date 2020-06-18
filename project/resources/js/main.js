import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Home, Puts, Shares } from './routes/routes';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

const Main = ({ }) => {
    return (
        <Router>
            <Layout style={{ height: "100vh" }}>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <span>Home</span>
                            <Link to="/" />
                        </Menu.Item>
                        <Menu.Item key="2">
                            <span>#MyPuts</span>
                            <Link to="/puts" />
                        </Menu.Item>
                        <Menu.Item key="3">
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
        </Router>
    );
}

export default Main;
