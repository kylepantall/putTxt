import React from 'react';
import { Menu, Layout } from 'antd';
import { StarOutlined, HistoryOutlined, AppstoreOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Puts = () => {
    return (
        <Content>
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    <SubMenu key="sub1" icon={<StarOutlined />} title="Starred">
                        <Menu.Item key="1">File.txt</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<HistoryOutlined />} title="Recent">
                        <Menu.Item key="5">Other.txt</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Categories">
                        <Menu.Item key="9">General</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <p>Other</p>
            </Content>
        </Content>
    );
}

export default Puts;
