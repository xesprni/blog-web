import React from "react";
import {NavList} from "../Component/NavList";
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

class Timelines extends React.Component {


    render() {
        return (
            <div className="user-select">
                <div className="container container-page">
                    <NavList/>
                    <div className="content">
                        <header className="article-header">
                            <h1 className="article-title">时光轴</h1>
                        </header>
                        <Timeline mode="alternate">
                            <Timeline.Item color="green">完成基本页面及基本功能实现 V1.0.0Release 2020-06-27</Timeline.Item>
                            <Timeline.Item>
                                完成首页及文章列表页面 2020-06-13
                            </Timeline.Item>
                            <Timeline.Item>
                                完全重构项目,使用分布式架构,基于spring-cloud建立基础模块 2020-06-12
                            </Timeline.Item>
                            <Timeline.Item>
                                仅保留bootstrap模板样式,采用React重写js,将基础页面转向JSX语法 2020-06-12
                            </Timeline.Item>
                            <Timeline.Item>
                                完全重构项目,使用分布式架构,基于spring-cloud建立基础模块 2020-06-12
                            </Timeline.Item>
                            <Timeline.Item color="red">某些原因,项目搁置 2020-01-01</Timeline.Item>
                            <Timeline.Item>使用bootstrap模板构建前端 2019-01-01</Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                使用单体项目构建后台 2019-10-01
                            </Timeline.Item>
                            <Timeline.Item>
                                建站筹划 2019-07-01
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        );
    }
}

export {Timelines};