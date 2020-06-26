import React from "react";
import {Commenter, CommentList} from "./Commenter";
import {Button, Spin} from "antd";
import {CommentOutlined, HistoryOutlined, ProfileOutlined, TeamOutlined} from "@ant-design/icons";
import {post, fetch} from '@utils/HttpUtil.js';

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            spinning: true,
            article: {},
            commentList: []
        };
    }

    componentWillMount() {
        let id = this.props.match.params;
        this.initArticle(id);
    }

    initArticle = (id) => {
        let url = "/article/getArticleById";
        let this_ = this;
        fetch(url, id).then(function (res) {
            if (res.flag) {
                this_.setState({
                    article: res.data
                });
            }
        });
    };

    componentDidMount() {
        //加载评论
        this.loadComment();
    }

    loadComment = () => {
        let id = this.props.match.params.id;
        let url = "/article/queryComment"
        let this_ = this;
        post(url, {articleId: id}).then(function (res) {
            this_.setState({
                commentList: res.data,
                spinning: false
            });
        });
    };

    render() {

        const article = this.state.article;
        const commentList = this.state.commentList;

        return (
            <div className="user-select single">
                <section className="container">
                    <div className="content-wrap">
                        <div className="content">
                            <header className="article-header">
                                <h1 className="article-title">{article.title}</h1>
                                <div className="article-meta">
                                    <span className="item article-meta-time">
                                      <time className="time">
                                          <HistoryOutlined/> {article.updateTime}
                                      </time>
                                    </span>
                                    <span className="item article-meta-category">
                                        <ProfileOutlined/><a href="program" title=""> {article.typeName}</a>
                                    </span>
                                    <span className="item article-meta-views">
                                        <TeamOutlined/>  共{article.readCount}人围观</span>
                                    <span className="item article-meta-comment" title="评论：0">
                                        <CommentOutlined/> {commentList.length}个不明物体
                                    </span>
                                </div>
                            </header>
                            <article className="article-content" dangerouslySetInnerHTML={{__html: article.content}}/>
                            <div className="article-tags">
                                标签： <Button type="primary" size="small">Tag</Button>
                            </div>
                            <div className="relates">
                                <div className="title">
                                    <h3>相关推荐</h3>
                                </div>
                                <ul>
                                    <li>相关功能完善中 敬请期待</li>
                                </ul>
                            </div>
                            <div className="title" id="comment">
                                <h3>评论 <small>抢沙发</small></h3>
                            </div>
                            <div id="respond">
                                <Commenter/>
                            </div>
                            <div id="postcomments">
                                <div style={{textAlign: "center"}}>
                                    <Spin spinning={this.state.spinning}/>
                                </div>
                                {commentList.map((item, index) => {
                                    return <CommentList key={item.commentId} comment={item} />;
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export {Article};