import React from "react";
import {NavList} from "../Component/NavList";


class Links extends React.Component {


    render() {
        return (
            <div className="user-select">
                <div className="container container-page">
                    <NavList/>
                    <div className="content">
                        <header className="article-header">
                            <h1 className="article-title">友情链接</h1>
                        </header>
                        <ul className="plinks">
                            <li><a href="https://www.xuezhixia.com/" title="雪之下的个人博客" target="_blank" rel="nofollow">雪之下的个人博客</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export {Links};