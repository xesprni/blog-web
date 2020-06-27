import React from "react";
import {fetch, post} from '@utils/HttpUtil.js';
import {ArticlePreview} from "../Component/ArticlePreview";
import {Pagination} from 'antd';

class ArticleList extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        articleList: [],
        dailySentence: {},
        currentPage: 1,
        total: 0
    };

    getArticle = (pageNum, pageSize, type = 0) => {
        let url = "/article/getArticleList";
        let url2 = "/article/getDailySentence";
        let this_ = this;
        post(url, {
            pageNum: pageNum,
            pageSize: pageSize,
            type: type
        }).then(function (res) {
            console.log(res.data)
            this_.setState({
                articleList: res.data.pageData,
                total: res.data.total
            });
        });
        fetch(url2).then(function (res) {
            this_.setState({
                dailySentence: res.data
            });
        })
    };

    pageChange = (page, size) => {
        this.getArticle(page, size)
    }

    componentWillMount() {
        this.getArticle(1, 10);
    }

    render() {

        const {currentPage, total} = this.state;

        return (
            <section className="container">
                <div className="content-wrap">
                    <div className="content">
                        <div className="title">
                            <h3>文章列表</h3>
                            <div className="more"><a href="">JAVA</a><a href="">BIG-DATA</a><a href="">DATABASE</a></div>
                        </div>
                        {this.state.articleList.map((item, index) => {
                            return <ArticlePreview key={item.articleId} article={item}/>;
                        })}
                        <Pagination pageSize={10} onChange={this.pageChange} defaultCurrent={currentPage}
                                    total={total}/>
                    </div>
                </div>
            </section>
        );
    }
}

export {ArticleList};