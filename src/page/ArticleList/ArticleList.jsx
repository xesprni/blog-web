import React from "react";

class ArticleList extends React.Component{
    render() {
        return (
            <section className="container">
                <div className="content-wrap">
                    <div className="content">
                        <div className="title">
                            <h3>后端程序</h3>
                        </div>
                        <article className="excerpt excerpt-1"><a className="focus" href="article.html" title=""></a>
                            <header><a className="cat" href="program">后端程序<i></i></a>
                                <h2><a href="article.html" title="">php如何判断一个日期的格式是否正确</a></h2>
                            </header>
                            <p className="meta">
                                <time className="time"><i className="glyphicon glyphicon-time"></i> 2016-1-4 10:29:39
                                </time>
                                <span className="views"><i className="glyphicon glyphicon-eye-open"></i> 共120人围观</span>
                                <a className="comment" href="article.html#comment"><i
                                    className="glyphicon glyphicon-comment"></i> 0个不明物体</a></p>
                            <p className="note">可以用strtotime()把日期（$date）转成时间戳，再用date()按需要验证的格式转成一个日期，来跟$date比较是否相同来验证这个日期的格式是否是正确的。所以要验证日期格式
                                ... </p>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}