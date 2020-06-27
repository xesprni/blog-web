import React from "react";
import {Dropdown, Menu} from 'antd';
import './css/navlist.css'
import {AppstoreOutlined, HomeOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

class NavList extends React.Component {

    render() {
        return (
            <div className="pageside">
                <div className="pagemenus">
                    <ul className="pagemenu">
                        <li><Link to="/blog/abouts">关于我</Link></li>
                        <li><Link to="/blog/links">友情链接</Link></li>
                        <li><Link to="/blog/timeline">时光轴</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const {SubMenu} = Menu;

class HeadNav extends React.Component {

    componentWillMount() {
        let hash = window.location.hash;
        if (hash) {
            this.setState({
                current: hash.substr(hash.lastIndexOf("/") + 1, hash.length)
            })
        }
    }

    state = {
        current: 'home',
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className="collapse navbar-collapse head-nav">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="home" icon={<HomeOutlined/>}>
                        <Link to="/blog/index">HOME</Link>
                    </Menu.Item>
                    <Menu.Item key="articles" icon={<AppstoreOutlined/>}>
                        <Link to="/blog/articles">ARTICLES</Link>
                    </Menu.Item>
                </Menu>
            </div>

        );
    }
}

class CollapseNav extends React.Component {

    state = {
        current: 'home',
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/blog/index">首页</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/blog/articles">文章列表</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/blog/abouts">关于我</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/blog/links">友情链接</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/blog/timeline">时光轴</Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <Dropdown className="navbar-toggle collapsed" overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <AppstoreOutlined/>
                </a>
            </Dropdown>
        );
    }
}

export {NavList, HeadNav, CollapseNav};