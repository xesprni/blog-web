import React from 'react';
import {Input} from 'antd';
import {AudioOutlined, HistoryOutlined, CommentOutlined, TeamOutlined, ClockCircleOutlined} from '@ant-design/icons';

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
        return (
            <article className="excerpt excerpt-1">
                <a className="focus" href="article.html" title="">
                    <img className="thumb" src="images/excerpt.jpg" alt=""/>
                </a>
                <header>
                    <a className="cat" href="program">后端程序<i></i></a>
                    <h2><a href="article.html" title="">php如何判断一个日期的格式是否正确</a></h2>
                </header>
                <p className="meta">
                    <time className="time">
                        <HistoryOutlined/> 2016-1-4 10:29:39
                    </time>
                    <span className="views">
                        <TeamOutlined/> 共120人围观
                    </span>
                    <a className="comment" href="article.html#comment">
                        <CommentOutlined/> 0个不明物体</a>
                </p>
                <p className="note">
                    可以用strtotime()把日期（$date）转成时间戳，再用date()按需要验证的格式转成一个日期，来跟$date比较是否相同来验证这个日期的格式是否是正确的。所以要验证日期格式
                    ...
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
    render() {
        return (
            <div className="widget widget_sentence">
                <h3>每日一句</h3>
                <div className="widget-sentence-content">
                    <h4>2016年01月05日星期二</h4>
                    <p>Do not let what you cannot do interfere with what you can do.<br/>
                        别让你不能做的事妨碍到你能做的事。（John Wooden）
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