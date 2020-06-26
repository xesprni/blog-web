import React from "react";
import {Tabs} from 'antd';
import './css/notify.css'

const {TabPane} = Tabs;

class Notify extends React.Component {
    render() {
        return (
            <div className="cart-bord">
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="网站公告" key="1">
                            <p>Content of Tab Pane 1</p>
                        </TabPane>
                        <TabPane tab="联系我" key="2">
                            <p style={{textAlign:"center",fontSize:20}}>Email</p>
                            <br/>
                            <p style={{textAlign:"center",fontSize:25}}><a href="mailto:isseidong@gmail.com?subject=feedBack&body=Hello">isseidong@gmail.com</a></p>
                        </TabPane>
                        {/*<TabPane tab="Tab Title 3" key="3">*/}
                        {/*    <p>Content of Tab Pane 3</p>*/}
                        {/*    <p>Content of Tab Pane 3</p>*/}
                        {/*    <p>Content of Tab Pane 3</p>*/}
                        {/*</TabPane>*/}
                    </Tabs>
                </div>
            </div>
        );
    }
}

export {Notify}