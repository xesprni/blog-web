import React from 'react';
import {HeadCarousel} from "../Component/Carousel";
import {ArticlePreview, Daily, HotArticle, SearchArticle} from "../Component/ArticlePreview";
import {Notify} from "../Component/Notify";
import {post, fetch} from '@utils/HttpUtil.js';
import {Spin} from "antd";

class Index extends React.Component {

    state = {
        articleList: [],
        dailySentence: {},
        spinning:true
    };

    initData = () => {
        let url = "/article/getArticleList";
        let url2 = "/article/getDailySentence";
        let this_ = this;
        post(url, {
            pageNum: 1
        }).then(function (res) {
            this_.setState({
                articleList: res.data.pageData,
                spinning:false
            });
        });
        fetch(url2).then(function (res) {
            this_.setState({
                dailySentence: res.data
            });
        })

    };

    componentWillMount() {
        this.initData();
    }


    render() {
        return (
            <section className="container">
                <div className="content-wrap">
                    <div className="content">
                        <HeadCarousel/>
                        <div className="title">
                            <h3>最新发布</h3>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <Spin spinning={this.state.spinning}/>
                        </div>
                        {this.state.articleList.map((item, index) => {
                            return <ArticlePreview key={item.articleId} article={item}/>;
                        })}
                    </div>
                </div>
                <aside className="sidebar">
                    <Notify/>
                    <SearchArticle/>
                    <Daily sentence={this.state.dailySentence} />
                    <HotArticle/>
                </aside>
            </section>
        );
    }
}

export {Index}