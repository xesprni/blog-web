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
                            <Timeline.Item color="green">2020 processing</Timeline.Item>
                            <Timeline.Item>
                                2019-nCoV 2019
                            </Timeline.Item>
                            <Timeline.Item>
                                MH370 2014
                            </Timeline.Item>
                            <Timeline.Item>
                                Wechat 2013
                            </Timeline.Item>
                            <Timeline.Item>
                                Peking Olympics 2008
                            </Timeline.Item>
                            <Timeline.Item color="red">RIP Jobs 2011</Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} >喜迎千禧年 2000</Timeline.Item>
                            <Timeline.Item >
                                QICQ 1999
                            </Timeline.Item>
                            <Timeline.Item>
                                抗洪救灾，众志成城 1998
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        );
    }
}

export {Timelines};