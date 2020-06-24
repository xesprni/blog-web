import {Breadcrumb, Layout, Menu} from 'antd';
import React from "react";
import {Link} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;

class AdminHome extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        collapsed: false,
        path: '/admin/editor'
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    componentWillMount() {
        if (window.location.hash.replace('#', '')) {
            this.setState({
                ...this.state,
                path:window.location.hash.replace('#', ''),
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.path !== window.location.hash.replace('#', '')) {
            this.setState({
                ...this.state,
                path:window.location.hash.replace('#', ''),
            })
        }
    }

    render() {
        return (
            <div>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme={"light"}>
                        <div className="logo"/>
                        <Menu theme="light" defaultSelectedKeys={['/admin/editor']} selectedKeys={[this.state.path]} mode="inline">
                            <Menu.Item key="/admin/editor">
                                <span>Editor</span>
                                <Link to={"/admin/editor"}/>
                            </Menu.Item>
                            <Menu.Item key="/admin/article">
                                <span>Article</span>
                                <Link to={"/admin/article"}/>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <span>Monitor</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span>Block</span>
                            </Menu.Item>
                            <Menu.Item key="/admin/sql">
                                <span>SQL Monitor</span>
                                <Link to={"/admin/sql"}/>
                            </Menu.Item>
                            <Menu.Item key="/admin/dict">
                                <span>DICT</span>
                                <Link to={"/admin/dict"}/>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <span>Chart</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}/>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Miracle- ©2019 </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export {AdminHome};