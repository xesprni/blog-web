import React from "react";
import {Tabs} from 'antd';
import './css/notify.css'
import {GithubOutlined, WeiboOutlined, TwitterOutlined, FacebookOutlined, InstagramOutlined} from "@ant-design/icons";

const {TabPane} = Tabs;

class Notify extends React.Component {
    render() {
        return (
            <div className="cart-bord">
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="网站公告" key="1">
                            <p>你好!欢迎来到本站。本站主要是技术向的个人网站。</p>
                            <p>后台及前端代码已同步开源至
                                {<a href="https://github.com/xesprni">Github <GithubOutlined/></a>}
                            </p>
                        </TabPane>
                        <TabPane tab="联系我" key="2">
                            <p style={{textAlign: "center", fontSize: 20}}>Email</p>
                            <br/>
                            <p style={{textAlign: "center", fontSize: 25}}><a
                                href="mailto:isseidong@gmail.com?subject=feedBack&body=Hello">isseidong@gmail.com</a>
                            </p>
                        </TabPane>
                        <TabPane tab="关注我" key="3">
                            <p><a href="https://weibo.com/u/2821985171"><WeiboOutlined/> Weibo</a></p>
                            <p>
                                <a href="https://www.facebook.com/profile.php?id=100015268657022"><FacebookOutlined/> Facebook</a>
                            </p>
                            <p><a href="https://twitter.com/Gakki_Dong"><TwitterOutlined/> Twitter</a></p>
                            <p><a href="https://www.instagram.com/gakki_dong/"><InstagramOutlined/> Instagram</a></p>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export {Notify}