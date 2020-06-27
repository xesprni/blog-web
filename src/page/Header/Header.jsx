import React from "react";
import {Button} from 'antd';
import {Link} from "react-router-dom";
import {ProfileTwoTone} from '@ant-design/icons';
import {CollapseNav, HeadNav} from "../Component/NavList";


class Header extends React.Component {

    render() {
        return (
            <header id="top" className="header">
                <nav className="navbar navbar-default" id="navbar">
                    <div className="container">
                        <div className="header-topbar hidden-xs link-border">
                            <ul className="site-nav topmenu">
                                <li><Link to="/blog/abouts">关于我</Link></li>
                                <li><Link to="/blog/links">友情链接</Link></li>
                                <li><Link to="/blog/timeline">时光轴</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-header">
                            <CollapseNav/>
                            <h1 className="logo hvr-bounce-in">
                                <b style={{color: '#006296'}}>
                                    Miracle-
                                </b>
                            </h1>
                        </div>
                        <HeadNav/>
                    </div>
                </nav>
            </header>
        );
    }

}

export {Header}