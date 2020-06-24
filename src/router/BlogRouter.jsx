import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {App} from "../App";
import {Index} from "../page/Index";
import {Article} from "../page/Component/Article";

class BlogRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <App>
                        <Route path="/blog" render={() =>
                            <Switch>
                                <Route exact path={"/blog/index"} component={Index}/>
                                <Route exact path={"/blog/article"} component={Article}/>
                            </Switch>
                        }/>
                    </App>
                </Switch>
            </HashRouter>
        );
    }
}

export {BlogRouter};