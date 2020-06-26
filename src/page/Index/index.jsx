import React from 'react';
import {HeadCarousel} from "../Component/Carousel";
import {ArticlePreview, Daily, HotArticle, SearchArticle} from "../Component/ArticlePreview";
import {Notify} from "../Component/Notify";
import {post, fetch} from '@utils/HttpUtil.js';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        articleList: [],
        dailySentence: {},
    };

    initData = () => {
        let url = "/article/getArticleList";
        let url2 = "/article/getDailySentence";
        let this_ = this;
        post(url, {
            pageNum: 1
        }).then(function (res) {
            this_.setState({
                articleList: res.data.pageData
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
                            <div className="more"><a href="">JAVA</a><a href="">BIG-DATA</a><a href="">DATABASE</a>
                            </div>
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