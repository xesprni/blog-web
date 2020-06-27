import React from "react";
import {NavList} from "../Component/NavList";
import {FacebookOutlined, InstagramOutlined, TwitterOutlined, WeiboOutlined} from "@ant-design/icons";


class Abouts extends React.Component {


    render() {
        return (
            <div className="user-select">
                <div className="container container-page">
                    <NavList/>
                    <div className="content">
                        <header className="article-header">
                            <h1 className="article-title">关于</h1>
                        </header>
                        <div style={{textAlign: "center"}}>
                            <p>Miracle</p>
                            <p>ID取自最喜爱的DOTA2选手</p>
                            <br/>
                            <p>A Java Developer</p>
                            <p>从业5年,现就职于顺丰,从事架构相关工作</p>
                            <br/>
                            <p>坐标深圳南山</p>
                            <p>热爱美食,热衷粤菜、杭帮菜</p>
                            <br/>
                            <p>网站的架构介绍请看置顶文章</p>
                            <br/>
                            <p><em>leaves are many, the root is one</em></p>
                            <p><em>虽然枝条很多，根却只有一条</em></p>
                            <p><em>Through all the lying days of my youth</em></p>
                            <p><em>穿过我青春的所有说谎的日子</em></p>
                            <p><em>I swayed my leaves and flowers in the sun</em></p>
                            <p><em>我在阳光下抖掉我的枝叶和花朵</em></p>
                            <p><em>Now I may wither into the truth</em></p>
                            <p><em>现在我可以枯萎而进入真理</em></p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p><a href="https://weibo.com/u/2821985171"><WeiboOutlined/> Weibo</a></p>
                            <p>
                                <a href="https://www.facebook.com/profile.php?id=100015268657022"><FacebookOutlined/> Facebook</a>
                            </p>
                            <p><a href="https://twitter.com/Gakki_Dong"><TwitterOutlined/> Twitter</a></p>
                            <p><a href="https://www.instagram.com/gakki_dong/"><InstagramOutlined/> Instagram</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {Abouts};