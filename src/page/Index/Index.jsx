import React from 'react';
import {HeadCarousel} from "../Component/Carousel";
import {ArticlePreview, Daily, HotArticle, SearchArticle} from "../Component/ArticlePreview";
import {Notify} from "../Component/Notify";

class Index extends React.Component {

    render() {
        return (
            <section className="container">
                <div className="content-wrap">
                    <div className="content">
                        <HeadCarousel/>
                        <div className="title">
                            <h3>最新发布</h3>
                            <div className="more"><a href="">JAVA</a><a href="">BIG-DATA</a><a href="">DATABASE</a></div>
                        </div>
                        <ArticlePreview/>
                    </div>
                </div>
                <aside className="sidebar">
                    <Notify/>
                    <SearchArticle/>
                    <Daily/>
                    <HotArticle/>
                </aside>
            </section>
        );
    }
}

export {Index}