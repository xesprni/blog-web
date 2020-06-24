import React from "react";
import {Commenter, CommentList} from "./Commenter";
import {Button} from "antd";
import {CommentOutlined, HistoryOutlined, ProfileOutlined, TeamOutlined} from "@ant-design/icons";

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="user-select single">
                <section className="container">
                    <div className="content-wrap">
                        <div className="content">
                            <header className="article-header">
                                <h1 className="article-title"><a href="article.html">php如何判断一个日期的格式是否正确</a></h1>
                                <div className="article-meta">
                                    <span className="item article-meta-time">
                                      <time className="time">
                                          <HistoryOutlined/> 2016-1-4 10:29:39
                                      </time>
                                    </span>
                                    <span className="item article-meta-category">
                                        <ProfileOutlined/><a href="program" title=""> 后端程序</a>
                                    </span>
                                    <span className="item article-meta-views">
                                        <TeamOutlined/>  共120人围观</span>
                                    <span className="item article-meta-comment" title="评论：0">
                                        <CommentOutlined/> 0个不明物体
                                    </span>
                                </div>
                            </header>
                            <article className="article-content">
                                "文章内容"
                            </article>
                            <div className="article-tags">
                                标签： <Button type="primary" size="small">Tag</Button>
                            </div>
                            <div className="relates">
                                <div className="title">
                                    <h3>相关推荐</h3>
                                </div>
                                <ul>
                                    <li><a href="article.html">php如何判断一个日期的格式是否正确</a></li>
                                </ul>
                            </div>
                            <div className="title" id="comment">
                                <h3>评论 <small>抢沙发</small></h3>
                            </div>
                            <div id="respond">
                                <Commenter/>
                            </div>
                            <div id="postcomments">
                                <CommentList/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export {Article};