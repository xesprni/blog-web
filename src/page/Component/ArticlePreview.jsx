import React from 'react';
import {Input} from 'antd';
import {AudioOutlined, HistoryOutlined, CommentOutlined, TeamOutlined, ClockCircleOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {Search} = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

class ArticlePreview extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const article = this.props.article;

        return (
            <article className="excerpt excerpt-1" style={{marginBottom: 10}}>
                <a className="focus" href="article.html" title="">
                    <img className="thumb" src="images/excerpt.jpg" alt=""/>
                </a>
                <header>
                    <span className="cat">{article.typeName}</span>
                    <h2><Link to={"/blog/article/" + article.articleId} title="">{article.title}</Link></h2>
                </header>
                <p className="meta">
                    <time className="time">
                        <HistoryOutlined/> {article.updateTime}
                    </time>
                    <span className="views">
                        <TeamOutlined/> 共{article.readCount}人围观
                    </span>
                    <a className="comment" href="article.html#comment">
                        <CommentOutlined/> 0个不明物体</a>
                </p>
                <p className="note">
                    {article.summary}
                </p>
            </article>
        );
    }
}

class HotArticle extends React.Component {
    render() {
        return (
            <div className="widget widget_hot">
                <h3>热门文章</h3>
                <ul>
                    <li>
                        <a href="">
                            <span className="thumbnail"><img className="thumb" src="images/excerpt.jpg"/></span>
                            <span className="text">php如何判断一个日期的格式是否正确</span>
                            <span className="muted"><ClockCircleOutlined/> 2016-1-4 </span>
                            <span className="muted"><TeamOutlined/> 120</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

class Daily extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sentence = this.props.sentence;

        return (
            <div className="widget widget_sentence">
                <h3>每日一句</h3>
                <div className="widget-sentence-content">
                    <h4>{sentence.dateline}</h4>
                    <p>{sentence.content}<br/>
                        {sentence.note}
                    </p>
                </div>
            </div>
        );
    }

}

class SearchArticle extends React.Component {
    render() {
        return (
            <div className="widget widget_search">
                <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton/>
            </div>
        );
    }
}

export {ArticlePreview, HotArticle, Daily, SearchArticle}