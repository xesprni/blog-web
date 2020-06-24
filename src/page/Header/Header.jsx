import React from "react";
import {Button} from 'antd';
import {ProfileTwoTone} from '@ant-design/icons';


class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-default" id="navbar">
                    <div className="container">
                        <div className="header-topbar hidden-xs link-border">
                            <ul className="site-nav topmenu">
                                <li><a>标签云</a></li>
                                <li><a rel="nofollow">读者墙</a></li>
                                <li><a rel="nofollow">友情链接</a></li>
                            </ul>
                        </div>
                        <div className="navbar-header">
                            {/*缩小后的按钮*/}
                            <Button className="navbar-toggle collapsed" type="primary" icon={<ProfileTwoTone/>}
                                    size="large"/>
                            <h1 className="logo hvr-bounce-in"><a>
                                <b style={{color: '#006296'}}>
                                    Miracle-
                                </b></a>
                            </h1>
                        </div>
                        <div className="collapse navbar-collapse" id="header-navbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="hidden-index active">
                                    <a href="index.html">Miracle首页</a>
                                </li>
                                <li><a>前端技术</a></li>
                                <li><a>后端程序</a></li>
                                <li><a>管理系统</a></li>
                                <li><a>授人以渔</a></li>
                                <li><a>程序人生</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export {Header}