import React from 'react';
import {Input} from 'antd';
import {AudioOutlined, HistoryOutlined, CommentOutlined, TeamOutlined, ClockCircleOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {fetch} from '@utils/HttpUtil.js';

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

    render() {

        const article = this.props.article;

        return (
            <article className="excerpt excerpt-1" style={{marginBottom: 10}}>
                <Link to={"/blog/article/" + article.articleId} title="">
                    <span className="focus" href="article.html" title="">
                        <img className="thumb" src="images/excerpt.jpg" alt=""/>
                    </span>
                    <header>
                        <span className="cat">{article.typeName}</span>
                        <h2>{article.title}</h2>
                    </header>
                    <p className="meta">
                        <time className="time">
                            <HistoryOutlined/> {article.updateTime}
                        </time>
                        <span className="views">
                            <TeamOutlined/> 共{article.readCount}人围观
                        </span>
                    </p>
                    <p className="note">
                        {article.summary}
                    </p>
                </Link>
            </article>
        );
    }
}

class HotArticle extends React.Component {

    getHotArticle = () => {
        let url = "/article/getHotArticle"
        let this_ = this;
        fetch(url).then(function (res) {
            this_.setState({
                hotArticles: res.data,
            });
        });
    };

    state = {
        hotArticles: []
    }

    componentDidMount() {
        this.getHotArticle();
    }

    render() {

        const {hotArticles} = this.state

        return (
            <div className="widget widget_hot">
                <h3>热门文章</h3>
                <ul>
                    <li>
                        {hotArticles.map((item, index) => {
                            return <Link key={index} to={"/blog/article/" + item.articleId}>
                                <span className="thumbnail">
                                    {/*<img className="thumb" src="images/excerpt.jpg"/>*/}
                                </span>
                                <span className="text">{item.title}</span>
                                <span className="muted"><ClockCircleOutlined/> {item.updateTime} </span>
                                <span className="muted"><TeamOutlined/> {item.readCount}</span>
                            </Link>;
                        })}
                    </li>
                </ul>
            </div>
        );
    }
}

class Daily extends React.Component {

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
                <Search placeholder="功能完善中 敬请期待" onSearch={value => console.log(value)} enterButton/>
            </div>
        );
    }
}

export {ArticlePreview, HotArticle, Daily, SearchArticle}