import React from "react";
import {HashRouter, Route, Switch,Redirect} from "react-router-dom";
import {App} from "../App";
import {Index} from "../page/Index";
import {Article} from "../page/Component/Article";
import {AdminHome} from "../page/Admin/AdminHome";
import {ArticleEditor} from "../page/Component/ArticleEditor";
import {Links} from "../page/Links/Links";
import {Abouts} from "../page/Abouts/Abouts";
import {ArticleList} from "../page/ArticleList/ArticleList";
import {Timelines} from "../page/TimeLine/Timelines";
import {Login} from "../page/Login/Login";

class BlogRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={"/login"} component={Login} />
                    <App>
                        <Route path="/" component={Index} exact/>
                        <Route path="/admin/" render={() =>
                            <AdminHome>
                                <Switch>
                                    <Route exact path={"/admin/editor"} component={ArticleEditor} />
                                    <Redirect to="/login"/>
                                </Switch>
                            </AdminHome>
                        } />
                        <Route path="/blog" render={() =>
                            <Switch>
                                <Route exact path={"/blog/index"} component={Index}/>
                                <Route exact path={"/blog/links"} component={Links}/>
                                <Route exact path={"/blog/abouts"} component={Abouts}/>
                                <Route exact path={"/blog/timeline"} component={Timelines}/>
                                <Route exact path={"/blog/articles"} component={ArticleList}/>
                                <Route exact path={"/blog/article/:id"} component={Article}/>
                                <Redirect to="/" />
                            </Switch>
                        }/>
                    </App>
                </Switch>
            </HashRouter>
        );
    }
}

export {BlogRouter};